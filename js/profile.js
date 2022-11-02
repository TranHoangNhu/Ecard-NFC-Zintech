var downContact = document.querySelector('#back-to-top');

function downloadCSV() {
    var vcf = "data:text/x-vcard;charset=utf-8;base64,QkVHSU46VkNBUkQNClZFUlNJT046My4wDQpQUk9ESUQ6LS8vQXBwbGUgSW5jLi8vaVBob25lIE9TIDkuMi4xLy9FTg0KTjpaaW50ZWNoO0NvbXBhbnk7OzsNCkZOOiBaaW50ZWNoDQpPUkc6IGxlYWQgeW91ciBzb2x1dGlvbjsNClRFTDt0eXBlPVdPUks7dHlwZT1WT0lDRTt0eXBlPXByZWY6MDg1ODYyNjc2OA0KRU5EOlZDQVJEDQo="; //Creates CSV File Format
    var excel = encodeURI(vcf); //Links to vcf
    var link = document.createElement("a");
    link.setAttribute("href", excel); //Links to vcf File
    link.setAttribute("download", "test.vcf"); //Filename that vcf is saved as
    link.click();
}

downContact.addEventListener("click", downloadCSV);

