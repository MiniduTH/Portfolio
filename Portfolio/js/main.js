function skillList(){
    console.log('tst');
    var skills=['HTML',
                'CSS',
                'JavaScript',
                'Node',
                'React',
                'Angular',
                'AI/ML',
                'Communication'];
    var content ="";
    for(i=0;i<skills.length;i++){
        content += '<span id ="btn" class="btn btn-info">' + skills[i] + '</span>';
    };

    document.getElementById('skillList').innerHTML = content;
};

skillList();