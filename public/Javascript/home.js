document.getElementById('SubmitBtn').addEventListener('click', ()=>{
    document.getElementById('resultview').style.display = 'none'
    document.getElementById('SubmitBtn').innerText = 'Loading...'
    document.getElementById('SubmitBtn').disabled = true
    document.getElementById('SubmitBtn').style.cursor = 'not-allowed';
    document.getElementById('SubmitBtn').classList.add('animate-pulse')
    // Variables for the form
    var UniversityName = document.getElementById('UniversityName').value
    var CourseName = document.getElementById('CourseName').value
    var SelectSemester = document.getElementById('SelectSemester').value
    var FindValue = document.getElementById('FindValue').value
    var SearchValue = document.getElementById('SearchValue').value

    // Check if the user has entered the values
    if(UniversityName == 'name' || CourseName == 'Select_Course' || SelectSemester == 'Select_Semester' || FindValue == 'FindValue' || SearchValue == ''){
        alert('Please enter all the values');
        document.getElementById('SubmitBtn').innerText = 'Search Now'
        document.getElementById('SubmitBtn').disabled = false
        document.getElementById('SubmitBtn').style.cursor = 'pointer';
        document.getElementById('SubmitBtn').classList.remove('animate-pulse')
    }
    else{
        console.log(UniversityName, CourseName, SelectSemester, FindValue, SearchValue);
        // Send the data to the server
        var FinalData = {UniversityName:UniversityName, CourseName:CourseName, SelectSemester:SelectSemester, FindValue:FindValue, SearchValue:SearchValue}
        fetch('http://localhost:3000/search', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(FinalData)
        }).then((response)=>{
            response.json().then((data)=>{
                document.getElementById('SubmitBtn').innerText = 'Search Now'
                document.getElementById('SubmitBtn').disabled = false
                document.getElementById('SubmitBtn').style.cursor = 'pointer';
                document.getElementById('SubmitBtn').classList.remove('animate-pulse')
                console.log(data[0])
                if(data[0] == undefined){
                    alert('No Result available with this details...')
                }
                else if(data[0] != undefined){
                    var name = data[0].Column2
                    var Roll_Number = data[0].Column1
                    var Registration_Number =data[0].Column3
                    var Status = data[0].Column5
                    let SGPAs = data[0].Column6
                    if(SGPAs == undefined){
                        let ToTal_SGPA = 0+'%'
                        SGPAs = 'No SGPA'
                        console.log(ToTal_SGPA)
                        document.getElementById('resultview').style.display = 'block'
                        document.getElementById('CandidateName').innerText = name
                        document.getElementById('RegistrationNumber').innerText = Registration_Number
                        document.getElementById('RollNumber').innerText = Roll_Number
                        document.getElementById('status').innerText = Status
                        document.getElementById('SGPA').innerText = SGPAs
                        document.getElementById('Total_Percentage').innerText = ToTal_SGPA
                    }
                    else{
                        let ToTal_SGPA = (SGPAs*10)-5+'%'
                        console.log(ToTal_SGPA)
                        document.getElementById('resultview').style.display = 'block'
                        document.getElementById('CandidateName').innerText = name
                        document.getElementById('RegistrationNumber').innerText = Registration_Number
                        document.getElementById('RollNumber').innerText = Roll_Number
                        document.getElementById('status').innerText = Status
                        document.getElementById('SGPA').innerText = SGPAs
                        document.getElementById('Total_Percentage').innerText = ToTal_SGPA
                    }
                }

            })
        }).catch((error)=>{
            console.log(error)
            alert('Something Error... Please Try Again')
        })
    }
})