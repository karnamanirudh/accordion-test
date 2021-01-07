var acordions = document.getElementsByClassName("accordion-header");
var panel = document.getElementsByClassName('accordion-body');
var sectionText = document.getElementsByClassName('section-list');
var text;
var sections;


window.onload = function () {
    document.getElementById('section-list').style.display = 'none';
};
for (var i = 0; i < acordions.length; i++) {

    acordions[i].addEventListener('click', function () {
        var setClasses = !this.classList.contains('active');
        var sectionIndicatorText = document.getElementById('section');
        setClass(acordions, 'active', 'remove');
        setClass(panel, 'show', 'remove');

        
        sectionIndicatorText.style.display = 'block';
        document.getElementById('section-list').style.display = 'none';

        if (setClasses) {
            this.classList.toggle("active");
            var displaySectionList = document.getElementById('section-list');
            displaySectionList.style.display = "block";
            sectionIndicatorText.style.display = 'none';
            sections = this.innerHTML;
            for (var j = 0; j < sectionText.length; j++) {
                if (sectionText[j].innerHTML == sections) {
                    sectionText[j].classList.add('selected-accordion')
                }
                else {
                    sectionText[j].classList.remove('selected-accordion')
                }
            }
            this.nextElementSibling.classList.toggle("show");
        }
    });
}

function setClass(els, className, fnName) {
    for (var i = 0; i < els.length; i++) {
        els[i].classList[fnName](className);
    }
}

