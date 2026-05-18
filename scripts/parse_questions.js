const fs = require('fs');
const path = require('path');

function parseMarkdownFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');
  const lines = content.split('\n');

  let title = '';
  let metadata = {};
  let currentSection = '';
  let theoryText = '';
  let questionsText = '';

  // Extract Title from first line
  if (lines[0] && lines[0].startsWith('# ')) {
    title = lines[0].substring(2).trim();
  }

  // Find sections
  let inTheory = false;
  let inQuestions = false;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (line.startsWith('# Bagian I — Materi')) {
      inTheory = true;
      inQuestions = false;
      continue;
    } else if (line.startsWith('# Bagian II — 100 Soal') || line.startsWith('# Bagian II — 100')) {
      inTheory = false;
      inQuestions = true;
      continue;
    } else if (line.startsWith('# Bagian III —')) {
      inTheory = false;
      inQuestions = false;
      continue;
    }

    if (inTheory) {
      theoryText += line + '\n';
    } else if (inQuestions) {
      questionsText += line + '\n';
    }
  }

  // Parse questions
  const questionBlocks = questionsText.split(/### Soal /);
  const questions = [];

  // The first block is empty or contains header text
  for (let i = 1; i < questionBlocks.length; i++) {
    const block = questionBlocks[i];
    const blockLines = block.split('\n');
    
    // Parse header: "1 · Cermin Pemantul · Kab"
    const headerLine = blockLines[0].trim();
    const headerParts = headerLine.split('·').map(s => s.trim());
    
    const number = parseInt(headerParts[0]) || i;
    const subTopic = headerParts[1] || '';
    const level = headerParts[2] || 'Kab'; // Default level

    let questionStr = '';
    let options = { A: '', B: '', C: '', D: '' };
    let answerKey = '';
    let explanationStr = '';
    let analysis = { A: '', B: '', C: '', D: '' };
    let steps = [];
    let tips = '';
    let concept = '';

    let parsingState = ''; // 'soal', 'opsi', 'jawaban', 'pembahasan'

    for (let j = 1; j < blockLines.length; j++) {
      const line = blockLines[j].trim();
      
      if (line.startsWith('**(1) Soal:**') || line.startsWith('**(1) Soal**')) {
        parsingState = 'soal';
        continue;
      } else if (line.startsWith('**(2) Pilihan Jawaban:**') || line.startsWith('**(2) Pilihan Jawaban**')) {
        parsingState = 'opsi';
        continue;
      } else if (line.startsWith('**(3) Jawaban:**') || line.startsWith('**(3) Jawaban**')) {
        parsingState = 'jawaban';
        // Parse answer key immediately from this line if possible
        const answerMatch = blockLines[j].match(/\*\*([A-D])\./) || blockLines[j].match(/\*\*([A-D])\s*\*\*/);
        if (answerMatch) {
          answerKey = answerMatch[1];
        }
        continue;
      } else if (line.startsWith('**(4) Pembahasan Komprehensif:**') || line.startsWith('**(4) Pembahasan Komprehensif**')) {
        parsingState = 'pembahasan';
        continue;
      }

      if (parsingState === 'soal') {
        if (line) {
          questionStr += (questionStr ? '\n' : '') + blockLines[j];
        }
      } else if (parsingState === 'opsi') {
        const optionMatch = line.match(/^([A-D])\.\s*(.*)/);
        if (optionMatch) {
          options[optionMatch[1]] = optionMatch[2].trim();
        }
      } else if (parsingState === 'jawaban') {
        // If we couldn't get it from the header, get it here
        if (!answerKey) {
          const answerMatch = line.match(/\*\*([A-D])\./) || line.match(/\*\*([A-D])\s*\*\*/);
          if (answerMatch) {
            answerKey = answerMatch[1];
          }
        }
      } else if (parsingState === 'pembahasan') {
        explanationStr += (explanationStr ? '\n' : '') + blockLines[j];
      }
    }

    // Secondary parsing of explanation to extract concept, analysis, steps, tips
    const explanationLines = explanationStr.split('\n');
    let subState = ''; // 'concept', 'analysis', 'steps', 'tips'
    
    for (let k = 0; k < explanationLines.length; k++) {
      const line = explanationLines[k].trim();
      
      if (line.includes('**Konsep yang diuji:**')) {
        concept = line.replace(/.*?\*\*Konsep yang diuji:\*\*\s*/, '').trim();
      } else if (line.includes('**Analisis Setiap Pilihan Jawaban:**') || line.includes('**Analisis Pilihan:**')) {
        subState = 'analysis';
      } else if (line.includes('**Langkah Penyelesaian') || line.includes('**Langkah-langkah**')) {
        subState = 'steps';
      } else if (line.includes('**Tips:**') || line.includes('**💭 Tips:**')) {
        subState = 'tips';
        tips = line.replace(/.*?\*\*Tips:\*\*\s*/, '').replace(/.*?\*\*💭 Tips:\*\*\s*/, '').trim();
      } else {
        if (subState === 'analysis') {
          // Parse: "  - **A. [text]** — [explanation]"
          const analysisMatch = line.match(/^-\s*\*\*([A-D])\.\s*(.*?)\*\*\s*(?:—|-)\s*(.*)/) || 
                              line.match(/^\*\s*\*\*([A-D])\.\s*(.*?)\*\*\s*(?:—|-)\s*(.*)/);
          if (analysisMatch) {
            analysis[analysisMatch[1]] = analysisMatch[3].trim();
          } else {
            // Check alternative match
            const analysisMatchAlt = line.match(/^-\s*\*\*([A-D])\*\*\s*(?:—|-)\s*(.*)/);
            if (analysisMatchAlt) {
              analysis[analysisMatchAlt[1]] = analysisMatchAlt[2].trim();
            }
          }
        } else if (subState === 'steps') {
          const stepMatch = line.match(/^\d+\.\s*(.*)/);
          if (stepMatch) {
            steps.push(stepMatch[1].trim());
          } else if (line.startsWith('- ') || line.startsWith('* ')) {
            steps.push(line.substring(2).trim());
          }
        } else if (subState === 'tips') {
          if (line) {
            tips += (tips ? '\n' : '') + line;
          }
        }
      }
    }

    questions.push({
      number,
      subTopic,
      level,
      question: questionStr.trim(),
      options,
      answerKey,
      concept,
      analysis,
      steps,
      tips: tips.trim()
    });
  }

  // Parse theory sections into list of subtopics
  const theorySubTopics = [];
  const theoryBlocks = theoryText.split(/\n##\s+/);
  for (let i = 1; i < theoryBlocks.length; i++) {
    const block = theoryBlocks[i];
    const blockLines = block.split('\n');
    const topicTitle = blockLines[0].trim();
    const body = blockLines.slice(1).join('\n').trim();
    theorySubTopics.push({
      title: topicTitle,
      content: body
    });
  }

  return {
    title,
    theory: theorySubTopics,
    questions
  };
}

// CLI Execution
if (require.main === module) {
  const args = process.argv.slice(2);
  const targetFile = args[0] || 'output/sub-bab/osn-sd-ipa-04b-cermin-campur.md';
  const outputFile = args[1] || 'parsed_questions.json';

  console.log(`Parsing file: ${targetFile}...`);
  try {
    const parsedData = parseMarkdownFile(targetFile);
    fs.writeFileSync(outputFile, JSON.stringify(parsedData, null, 2), 'utf-8');
    console.log(`Successfully parsed ${parsedData.questions.length} questions.`);
    console.log(`Output saved to: ${outputFile}`);
  } catch (err) {
    console.error(`Error parsing file: ${err.message}`);
    process.exit(1);
  }
}

module.exports = { parseMarkdownFile };
