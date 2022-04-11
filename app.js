const form = document.querySelector(".dev-quiz");
const correctAnswers = ['B', 'A', 'B', 'A', 'B', 'A', 'B', 'A', 'A', 'B'];
const resultBlock = document.querySelector('#result');
const result = document.querySelector('.result-score');
// console.log()


form.addEventListener('submit', e => {
    e.preventDefault();
    // console.log(e.target);
// Getting score
    let score = 0;
    const userAnswers = [ form.q1.value, form.q2.value, form.q3.value, form.q4.value, form.q5.value, form.q6.value, form.q7.value, form.q8.value, form.q9.value, form.q10.value];

    userAnswers.forEach((answer, index) => {
        if(answer === correctAnswers[index]){
            score += 10;
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
    const timer = setInterval(() => {
        result.textContent = `${output}%`;
        if(output === score ){
            clearInterval(timer);
          
            // Designing the result
                if( output <= 40 ){
                    result.classList.remove('text-primary');
                    result.classList.add('text-danger');
                } else if (output <= 50) {
                    result.classList.toggle('text-primary');
                    result.classList.toggle('text-warning');
                }
                 else if (output <= 70 ) {
                    result.classList.toggle('text-primary');
                    result.classList.toggle('text-info');
                } else {
                    result.classList.remove('text-primary');
                    result.classList.add('text-success');
                }

        } else {
            output++;
        }
    }, 20);

});