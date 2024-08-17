// JavaScript for inserting sample text
document.getElementById('demo-button').addEventListener('click', function() {
    const sampleText = "Artificial Intelligence (AI) refers to the simulation of human intelligence processes by machines, particularly computer systems. These processes include learning (the acquisition of information and rules for using the information), reasoning (using rules to reach approximate or definite conclusions), and self-correction. Specific applications of AI include expert systems, natural language processing (NLP), speech recognition, and machine vision. AI can be categorized into two types: Narrow AI and General AI. Narrow AI, also known as Weak AI, is designed and trained for a specific task, such as facial recognition or internet searches. It operates under a limited range of conditions and cannot perform tasks beyond its programming. In contrast, General AI, or Strong AI, refers to a type of AI that can understand, learn, and apply intelligence across a broad range of tasks, much like a human being. General AI remains largely theoretical and has not yet been achieved.Machine Learning (ML), a subset of AI, involves the use of algorithms and statistical models that enable computers to improve their performance on a task over time without being explicitly programmed. These algorithms build a mathematical model based on sample data, known as training data, to make predictions or decisions without being directly programmed to perform the task.";

const textArea = document.getElementById('text_to_summarize');
textArea.value = sampleText;

// Manually trigger the input event to enable the button
textArea.dispatchEvent(new Event('input'));
});

const textArea = document.getElementById("text_to_summarize");
const submitButton = document.getElementById("submit-button");
const summarizedTextArea = document.getElementById("summary");

submitButton.disabled = true;


textArea.addEventListener("input", verifyTextLength);
submitButton.addEventListener("click", submitData);


function verifyTextLength(e) {
 // The e.target property gives us the HTML element that triggered the event, which in this case is the textarea. We save this to a variable called 'textarea'
  const textarea = e.target;

  // Verify the TextArea value.
  if (textarea.value.length > 200 && textarea.value.length < 100000) {
    // Enable the button when text area has value.
    submitButton.disabled = false;
  } else {
    // Disable the button when text area is empty.
    submitButton.disabled = true;
  }
}

function submitData(e) {

 // This is used to add animation to the submit button
  submitButton.classList.add("submit-button--loading");

  const text_to_summarize = textArea.value;

  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    "text_to_summarize": text_to_summarize
  });

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };

  // Send the text to the server using fetch API

 // Note - here we can omit the “baseUrl” we needed in Postman and just use a relative path to “/summarize” because we will be calling the API from our Replit!  
  fetch('/summarize', requestOptions)
    .then(response => response.text()) // Response will be summarized text
    .then(summary => {
      // Do something with the summary response from the back end API!

      // Update the output text area with new summary
      summarizedTextArea.value = summary;

      // Stop the spinning loading animation
      submitButton.classList.remove("submit-button--loading");
    })
    .catch(error => {
      console.log(error.message);
    });
}
