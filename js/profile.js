var downContact = document.querySelector('#back-to-top');

function downloadCSV() {
    var vcf = "data:text/x-vcard;charset=utf-8;base64,QkVHSU46VkNBUkQNClZFUlNJT046My4wDQpQUk9ESUQ6LS8vQXBwbGUgSW5jLi8vaVBob25lIE9TIDkuMi4xLy9FTg0KTjpOaHU7VHJhbjs7Ow0KRk46IFppbnRlY2gNCk9SRzogbGVhZCB5b3VyIHNvbHV0aW9uOw0KVEVMO3R5cGU9V09SSzt0eXBlPVZPSUNFO3R5cGU9cHJlZjowOTYzNDAyMzM0DQpFTkQ6VkNBUkQ="; //Creates CSV File Format
    var excel = encodeURI(vcf); //Links to CSV
    var link = document.createElement("a");
    link.setAttribute("href", excel); //Links to CSV File
    link.setAttribute("download", "test.vcf"); //Filename that CSV is saved as
    link.click();
}

downContact.addEventListener("click", downloadCSV);

