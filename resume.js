var activetab = 1;
SwitchTab();

function SelectedTab(selectedelement) {
    var newvaluetab = selectedelement.getAttribute('data-target');

    if (activetab !== Number(newvaluetab)) {
        activetab = Number(newvaluetab);
        SwitchTab();
    }
}

function SwitchTab() {
    switch (activetab) {
        case 1:
            document.getElementById('about').style.display ='block';
            document.getElementById('certificates').style.display ='none';
            document.getElementById('experiences').style.display = 'none';
            break;
        case 2:
            document.getElementById('about').style.display = 'none';
            document.getElementById('certificates').style.display = 'block';
            document.getElementById('experiences').style.display = 'none';
            break;
        case 3:
            document.getElementById('about').style.display = 'none';
            document.getElementById('certificates').style.display = 'none';
            document.getElementById('experiences').style.display = 'block';

            break;
    }
}