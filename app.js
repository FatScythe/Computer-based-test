const form = document.querySelector(".dev-quiz");
const correctAnswers = ['B', 'A', 'B', 'A' ];
const resultBlock = document.querySelector('#result');
const result = document.querySelector('.result-score');

// console.log(result)


form.addEventListener('submit', e => {
    e.preventDefault();
    // console.log(e.target);
// Getting score
    let score = 0;
    const userAnswers = [ form.q1.value, form.q2.value, form.q3.value, form.q4.value];

    userAnswers.forEach((answer, index) => {
        if(answer === correctAnswers[index]){
            score += 25;
        }
    
    });
// To scroll the user back to the top after submitting so they can see their scores
    scrollTo(0,0);
   
// To show the result div
    resultBlock.classList.remove('d-none');

    // Showing Score
    // console.log(score);

// Animating the score 
    let output  = 0;

    // Designing the result
    // if(output <= 75 && output >=50){
    //     result.classList.remove('text-primary');
    //     result.classList.add('text-info');
    // } else if (output <= 49 && output >= 25 ) {
    //     result.classList.toggle('text-primary');
    //     result.classList.toggle('text-warning');
    // } else if (output <= 24 && output >= 0 ) {
    //     result.classList.toggle('text-primary');
    //     result.classList.toggle('text-danger');
    // } else {
    //     result.classList.add('text-success');
    // }

    const timer = setInterval(() => {
        result.textContent = `${output}%`;
        if(output === score ){
            clearInterval(timer);
        } else {
            output++;
        }
    
        

    }, 10);

});