function resetForm() {
    document.getElementById('byo-form').reset();
}
function checkImage() {
    const fileInput = document.getElementById('introImage');
    const file = fileInput.files[0];
    
    if (file) {
      const fileType = file.type;
      if (fileType.startsWith('image/')) {
        alert('File is an image.');
      } else {
        alert('File is not an image.');
      }
    } else {
      alert('Please select a file.');
    }
  }

function loadImage() {
    var image = document.getElementById('introImage').files[0];
    var imageUrl = URL.createObjectURL(image);
    var text = "<img style=\"border-radius:10px; width:300px; margin:10px auto;\" src=\"" + imageUrl + "\" >"
    document.getElementById('loadImage').innerHTML = text;
}

function turnDark() {
    var body = document.getElementById('bodyy');
    var resArea = document.getElementsByClassName('resArea');
    var iResArea = document.querySelectorAll('[id^="resArea"]')
    body.classList.remove('bodyFormat');
    body.classList.add('darkMode');

    iResArea.forEach(function (iResArea) {
        iResArea.classList.add('darkModeAdd');
    });

    resArea.forEach(function (resArea) {
        resArea.classList.add('darkModeAdd');
    });
    var img = document.getElementById('byoLoadImg');
    img.classList.add('darkModeAdd');
}


function addClass() {
    var input = document.createElement("input");
    input.setAttribute('type', 'text');
    input.setAttribute('id', 'addedClass');
    var parent = document.getElementById("classResponse");
    parent.appendChild(input);
}

function byoIntro() {
    var byoName = document.getElementById('byo-name').value;
    var byoMascot = document.getElementById('byo-mascot').value;
    var byoImage = document.getElementById('introImage').files[0];
    var byoImageCap = document.getElementById('byo-imagecap').value;
    var byoPersonalBack = document.getElementById('byo-personalBack').value;
    var byoProfessionalBack = document.getElementById('byo-professionalBack').value;
    var byoAcademicBack = document.getElementById('byo-academicBack').value;
    var byoWebBack = document.getElementById('byo-webBack').value;
    var byoComp = document.getElementById('byo-comp').value;
    var byoCourses = document.querySelectorAll('#addedClass').value;
    var byoFact = document.getElementById('byo-fact').value;
    var byoAnything = document.getElementById('byo-anything').value;

    var imageUrl = URL.createObjectURL(byoImage);

    // Concatenate the values into a single string
    var introText = "<figure><img style=\"border-radius:10px; width:350px;\" src=\"" + imageUrl + "\" ></figure>" +
        "<figcaption style=\"margin-top;-15px;\">" + byoImageCap +"</figcaption>" +
         "<ul>" +
        "<li  style=\"text-align: justify; align-items: center;\">" + "<strong>Name: </strong>" + byoName + "</li>" +
        "<li  style=\"text-align: justify; align-items: center;\">" + "<strong>Mascot: </strong>" + byoMascot + "</li>" +  
        "<li  style=\"text-align: justify; align-items: center;\">" + "<strong>Personal Background: </strong>" + byoPersonalBack + "<br>" +
        "<li  style=\"text-align: justify; align-items: center;\">" + "<strong>Professional Background: </strong>" + byoProfessionalBack + "<br>" +
        "<li  style=\"text-align: justify; align-items: center;\">" + "<strong>Academic Background: </strong>" + byoAcademicBack + "<br>" +
        "<li  style=\"text-align: justify; align-items: center;\">" + "<strong>Web Background: </strong>" + byoWebBack + "<br>" +
        "<li  style=\"text-align: justify; align-items: center;\">" + "<strong>Computer: </strong>" + byoComp + "<br>" +
        "<li  style=\"text-align: justify; align-items: center;\">" + "<strong>Courses: </strong>" + byoCourses + "<br>" +
        "<li  style=\"text-align: justify; align-items: center;\">" + "<strong>Fact: </strong>" + byoFact + "<br>" +
        "<li  style=\"text-align: justify; align-items: center;\">" + "<strong>Anything Else: </strong>" + byoAnything +
        "</ul>";
    // Display the concatenated string in the 'displayForm' element
    document.getElementById('byo-form').style.display = "none";
    var displayFormElement = document.getElementById('displayForm');
    displayFormElement.innerHTML = introText;
}

document.addEventListener('click', function(event) {
    if (event.target && event.target.id === 'submitButton') {
        byoIntro();
    }
});