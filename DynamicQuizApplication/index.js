// console.log("Hello World!");

// document.addEventListener('DOMContentLoaded', function () {

//     let answer1 = document.getElementById('answer1').value
//     let selectedOption = document.querySelector('input[name="question1"]:checked').value

//     console.log(selectedOption);

//     // if(answer1 === selectedOption){
//     //     alert(1)
//     // }else{
//     //     alert(0)
//     // }
//     console.log(answer1);

// })

// Function to handle feedback for selected answers
document.addEventListener('DOMContentLoaded', function () {

    function provideFeedback(event) {
        let selectedOption = event.target;
        if (selectedOption.type === 'radio') {
            let questionDiv = selectedOption.closest('.question');
            let correctAnswer = questionDiv.getAttribute('answer');
            let feedbackDiv = questionDiv.querySelector('.feedback');

            if (selectedOption.value === correctAnswer) {
                feedbackDiv.textContent = 'Correct!';
                feedbackDiv.style.color = 'green';
            } else {
                feedbackDiv.textContent = 'Wrong!';
                feedbackDiv.style.color = 'red';
            }
        }
    }

    // Attach event listeners to all radio buttons
    document.querySelectorAll('input[type="radio"]').forEach(radio => {
        radio.addEventListener('change', provideFeedback);
    });

})