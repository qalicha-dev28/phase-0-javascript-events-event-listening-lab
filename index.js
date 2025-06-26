function addingEventListener() {
  // Get the input element with id 'button'
  const input = document.getElementById('button');
  
  // Define the click event handler function
  function clickAlert() {
    alert('I was clicked!');
  }
  
  // Add click event listener to the input element
  input.addEventListener('click', clickAlert);
}

// Call the function to activate the event listener
addingEventListener();