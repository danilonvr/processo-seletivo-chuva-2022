function viewMore(){
    let dots = document.getElementById('dots');
    let viewMore = document.getElementById('view-more');
    let btn = document.getElementById('btn-view-more');
    let btnClose = document.getElementById('btn-view-close');

    if(dots.style.display == 'none'){
        dots.style.display = 'inline';
        viewMore.style.display = 'none';
        btn.style.display = 'inline';
        btnClose.style.display = 'none'
    }else{
        dots.style.display = 'none';
        viewMore.style.display = 'inline';
        btn.style.display = 'none';
        btnClose.style.display = 'inline'
    }
}

function newTopic(){
    const topic = document.querySelector('.topic');
    const topicForm = document.querySelector('.topic-form');
    const formSent = document.querySelector('.form-sent');
    const feedback = document.querySelector('.feedback');


    if(!topic.classList.contains('hidden') && topicForm.classList.contains('hidden')){
        topic.classList.add('hidden');
        topicForm.classList.remove('hidden')
    }else if(topic.classList.contains('hidden') && !topicForm.classList.contains('hidden')){
        topicForm.classList.add('hidden');
        formSent.classList.remove('hidden');
        feedback.classList.remove('hidden')
        
    }else if( !formSent.classList.contains('hidden') && !feedback.classList.contains('hidden')){
        formSent.classList.add('hidden');
        topicForm.classList.remove('hidden');
        feedback.classList.add('hidden')
    }
}

function expandTopic(n){
    const topicComments = document.querySelectorAll('.topic-comments')

    if (n == 1){
       topicComments[0].classList.toggle('hidden')
    }else if (n == 2){
        topicComments[1].classList.toggle('hidden')
    }
}

function showButtonMenu(){
   
    const collapse = document.querySelector('.collapse')

    if(!collapse.classList.contains('show')){
        collapse.classList.add('show')
    }else{
        collapse.classList.remove('show')
    }
}

