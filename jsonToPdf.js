const fs = require('fs');
const PDFDocument = require('pdfkit');

// Replace with your JSON data
const jsonData = [{
	"_id": {
		"$oid": "5e5f929a38e75a65aa626865"
	},
	"matrixSize": {
		"rows": 0,
		"columns": 0
	},
	"tags": [
		"English"
	],
	"difficulty": "1",
	"assets": [],
	"type": "mcq",
	"partialMarking": false,
	"hasRelatedQuestions": false,
	"childQuestions": [],
	"question": {
		"text": "Lothal is a site where dockyards of which civilization were found —"
	},
	"options": [
		{
			"d": {
				"text": "Indus Valley"
			},
			"v": 0
		},
		{
			"d": {
				"text": "Mesoptamian"
			},
			"v": 1
		},
		{
			"d": {
				"text": "Egyptian"
			},
			"v": 2
		},
		{
			"d": {
				"text": "Persian"
			},
			"v": 3
		}
	],
	"answer": 0,
	"solution": {
		"text": ""
	},
	"comprehension": "",
	"topicId": {
		"$oid": "5de8f208f2109b7c7646f698"
	},
	"__v": 0
},
{
	"_id": {
		"$oid": "5e5f932238e75a65aa62699a"
	},
	"matrixSize": {
		"rows": 0,
		"columns": 0
	},
	"tags": [
		"English"
	],
	"difficulty": "1",
	"assets": [],
	"type": "mcq",
	"partialMarking": false,
	"hasRelatedQuestions": false,
	"childQuestions": [],
	"question": {
		"text": "What was the ultimate goal of Mahatma Gandhi’s Salt Satyagraha —"
	},
	"options": [
		{
			"d": {
				"text": "repeal of Salt Satyagraha"
			},
			"v": 0
		},
		{
			"d": {
				"text": "curtailment of the Government’s power"
			},
			"v": 1
		},
		{
			"d": {
				"text": "economic relief to the common people"
			},
			"v": 2
		},
		{
			"d": {
				"text": "‘Purna Swaraj’ for India"
			},
			"v": 3
		}
	],
	"answer": 3,
	"solution": {
		"text": ""
	},
	"comprehension": "",
	"topicId": {
		"$oid": "5de8f208f2109b7c7646f698"
	},
	"__v": 0
}]

// Create a new PDF document
const doc = new PDFDocument();
doc.pipe(fs.createWriteStream('questions1.pdf'));

// Loop through each question in the JSON data
jsonData.forEach((question, index) => {
  doc.font('Helvetica-Bold').fontSize(16).text(`Question ${index + 1}:`, 20, doc.y + 10);
  doc.font('Helvetica').fontSize(12).text(question.question.text, 20, doc.y + 20, { width: 500 });

  // Loop through each option in the question
  question.options.forEach((option, optionIndex) => {
    doc.font('Helvetica-Bold').fontSize(12).text(`Option ${optionIndex + 1}:`, 40, doc.y + 10);
    doc.font('Helvetica').fontSize(12).text(option.d.text, 60, doc.y + 20, { width: 500 });
  });

  // Add the answer and solution
  doc.font('Helvetica-Bold').fontSize(12).text(`Answer: ${question.options[question.answer].d.text}`, 20, doc.y + 20);
  doc.font('Helvetica-Bold').fontSize(12).text(`Solution: ${question.solution.text}`, 20, doc.y + 20);

  doc.addPage(); // Add a new page for the next question
});

// Finalize the PDF
doc.end();

console.log('PDF generated successfully.');
