document.getElementById("FindValue").addEventListener("change", () => {
  if (document.getElementById("FindValue").value == "Select_Method") {
    document.getElementById("lebelforSearchValue").innerText =
      "Please Select a Method";
    document.getElementById("SearchValue").disabled = true;
    document.getElementById("SearchValue").classList.add("blur-sm");
  } else if (
    document.getElementById("FindValue").value == "RegistrationNumber"
  ) {
    document.getElementById("lebelforSearchValue").innerText =
      "Enter Registration Number here";
    document.getElementById("SearchValue").placeholder = "xxxxxx";
    document.getElementById("SearchValue").disabled = false;
    document.getElementById("SearchValue").classList.remove("blur-sm");
  } else if (document.getElementById("FindValue").value == "RollNumber") {
    document.getElementById("lebelforSearchValue").innerText =
      "Enter University Roll Number here";
    document.getElementById("SearchValue").placeholder = "xxxxx-xxxx";
    document.getElementById("SearchValue").disabled = false;
    document.getElementById("SearchValue").classList.remove("blur-sm");
  }
});

document.getElementById("SearchBtn").addEventListener("click", async () => {
  document.getElementById("SearchBtn").innerText = "Loading...";
  document.getElementById("SearchBtn").disabled = true;
  document.getElementById("SearchBtn").style.cursor = "not-allowed";
  document.getElementById("SearchBtn").classList.add("animate-pulse");
  // get the values from the form
  var UniversityName = "KU";
  var CourseName = document.getElementById("CourseName").value;
  var SelectSemester = document.getElementById("SelectSemester").value;
  var FindValue = document.getElementById("FindValue").value;
  var SearchValue = document.getElementById("SearchValue").value;

  // check logic
  if (
    UniversityName == "name" ||
    CourseName == "Select_Course" ||
    SelectSemester == "Select_Semester" ||
    FindValue == "FindValue" ||
    SearchValue == ""
  ) {
    alert("Please enter all the values");
    document.getElementById("SearchBtn").innerText = "Search Now";
    document.getElementById("SearchBtn").disabled = false;
    document.getElementById("SearchBtn").style.cursor = "pointer";
    document.getElementById("SearchBtn").classList.remove("animate-pulse");
  } else {
    console.log(
      UniversityName,
      CourseName,
      SelectSemester,
      FindValue,
      SearchValue
    );
    // Send the data to the server
    var FinalData = {
      UniversityName: UniversityName,
      CourseName: CourseName,
      SelectSemester: SelectSemester,
      FindValue: FindValue,
      SearchValue: SearchValue,
    };

    let response = await fetch("/api/v3/result/find", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(FinalData),
    });
    let data = await response.json();
    if (data.length == 0) {
      alert("No Result Found");
      document.getElementById("SearchBtn").innerText = "Search Now";
      document.getElementById("SearchBtn").disabled = false;
      document.getElementById("SearchBtn").style.cursor = "pointer";
      document.getElementById("SearchBtn").classList.remove("animate-pulse");
    } else {
      let SGPAs = data[0].Column6;
      let ToTal_SGPA;
      if (SGPAs == undefined) {
        SGPAs = "No SGPA";
        ToTal_SGPA = "Not Available";
      } else {
        ToTal_SGPA = SGPAs * 10 - 5 + "%";
      }
      document.getElementById("SearchBtn").innerText = "Search Now";
      document.getElementById("SearchBtn").disabled = false;
      document.getElementById("SearchBtn").style.cursor = "pointer";
      document.getElementById("SearchBtn").classList.remove("animate-pulse");
      let template = `
            <div id="resultModal" data-modal-backdrop="static" tabindex="-1" aria-hidden="true" class="fixed top-0 left-0 right-0 z-50 hidden lg:ml-[19rem] mt-[5rem] lg:mt-[2.25rem] w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full">
            <div class="relative w-full h-full max-w-2xl md:h-auto">
            <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <div class="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
            <h2 id="resultname" class="text-sm lg:text-xl font-semibold text-gray-900 dark:text-white">
            Hey ${data[0].Column2} Your Result is Here
            </h2>
                            <button id='closebtn' type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="staticModal">
                            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>  
                            </button>
                            </div>
                            <div class="p-6 space-y-6">
                                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Roll Number : <span class='font-light'>${data[0].Column1}</span></h5>
                                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Registration Number : <span class='font-light'>${data[0].Column3}</span></h5></h5>
                            <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Candidate Name : <span class='font-light'>${data[0].Column2}</span></h5></h5>
                                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Status : <span class='font-light'>${data[0].Column5}</span></h5></h5>
                                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">SGPA : <span class='font-light'>${SGPAs}</span></h5></h5>
                                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Percentage : <span class='font-light'>${ToTal_SGPA}</span></h5></h5>
                            </p>
                            </div>
                            </div>
                            </div>
                            </div>`;
      document.getElementById("resultarrive").innerHTML = template;

      document.getElementById("resultModal").classList.toggle("hidden");
      document.getElementById("closebtn").addEventListener("click", () => {
        document.getElementById("resultModal").classList.toggle("hidden");
        document.getElementById("resultarrive").innerHTML = "";
      });
    }
  }
});
