// // const fs = require('fs');
// // const pdf2json = require('pdf2json');

// // // Read the PDF file
// // const pdfData = fs.readFileSync('/home/leninkumar/sm/dummy.pdf');

// // // Create a PDF parser
// // const pdfParser = new pdf2json();

// // // Parse the PDF data
// // pdfParser.on('pdfParser_dataReady', pdfData => {
// //     console.log("here 1 ")
// //   // Extracted text content
// //   const textContent = pdfParser.getRawTextContent();
// //   console.log("here 2 ")


// //   // Process text content and convert it to JSON as needed
// //   const jsonData = {}; // Your JSON data structure


// //   // Example: Split text content by lines
// //   const lines = textContent.split('\n');
// //   console.log("here 3 ")

// //   for (const line of lines) {

// //     // Process each line to populate the jsonData object
// //     // Example: Assuming each line is in the format "Key: Value"
// //     const [key, value] = line.split(':').map(str => str.trim());
// //     if (key && value) {
// //       jsonData[key] = value;
// //     }
// //     console.log("here 4 ")

// //   }
// //   console.log("here 5 ")

// //   // Print the JSON structure
// //   console.log(JSON.stringify(jsonData, null, 2));
// // });

// // pdfParser.parseBuffer(pdfData);
// // console.log("here  ")

// // pdfParser.on('pdfParser_dataError', errData => {
// //   console.error('Error parsing PDF:', errData);
// // });


// const fs = require('fs');
// const pdf = require('pdf-parse');

// // Read the PDF file
// const pdfData = fs.readFileSync('/home/leninkumar/sm/sample.pdf');
// console.log("pdfData :", pdfData)

// // Parse the PDF data
// pdf(pdfData).then(data => {
//   // Extracted text content
//   console.log("data :", data)

//   const textContent = data.text;

//   // Define a regular expression pattern to match the structured data (e.g., key-value pairs)
//   const pattern = /Key:\s*(.*?)\s*Value:\s*(.*?)\s*/g;
//   const matches = [...textContent.matchAll(pattern)];
//   console.log("matches :", matches)



//   // Convert matches to JSON
//   const jsonData = [];

//   for (const match of matches) {
//   console.log("match :", match)

//     jsonData.push({
//       key: match[1],
//       value: match[2],
//     });
//   }

//   // Print the JSON structure
//   console.log(JSON.stringify(jsonData, null, 2));
// }).catch(error => {
//   console.error('Error reading PDF:', error);
// });



const request = require('request');
const pdf = require('pdf-parse');

// URL of the PDF file you want to read
const pdfUrl = 'https://www.africau.edu/images/default/sample.pdf'; // Replace with the actual URL

// Make an HTTP request to fetch the PDF content
request.get(pdfUrl, { encoding: null }, (error, response, pdfBuffer) => {
  if (error) {
    console.error('Error fetching the PDF:', error);
    return;
  }

  // Parse the PDF data
  pdf(pdfBuffer).then(data => {
    console.log("sd")
    // Extracted text content
    const textContent = data.text;

    // Process or use the text content as needed
    console.log(textContent);
  }).catch(error => {
    console.error('Error parsing PDF:', error);
  });
});
