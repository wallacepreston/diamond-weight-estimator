//Eventually, I want to create a function with callbacks in it, allowing for different diamond shapes.  

//one function for AVERAGE diameter. Default average diameter from the maxDiam or minDiam

//one function for depth measurement to percent or vice versa with a default depth given a diameter

//one function to put them together into one calculation

//one function that accepts a shape and returns a multiplier to calculate weight.

// function diaWeightEstimator(maxDiam,minDiam,depthMeas,depthPercent){
  
  
// }

// to begin, this is the most basic type of function: The Round Diamond Weight Estimator.  Later, we'll pull out the different "helper" functions that will allow us to change parameters with shape etc. The basic calculation should be: average girdle diameter squared x depth x 0.0061


// maxDiam is required.  Everything else is optional
// minDiam default is the same number as maxDiam
// depthPercent default is 60.7
// depthMeas default is depthPercent * avgGirdleDiam

function roundDiaEstimator(maxDiam,minDiam,depthMeas,depthPercent){
    if(maxDiam === undefined){
      return 'ERROR: Maximum Diameter is a required field.';
    }
    if(minDiam === undefined || minDiam === 0){
      minDiam = maxDiam;
    }
    let avgGirdleDiam = (maxDiam + minDiam)/2;
    if(depthPercent === undefined || depthPercent === 0){
      depthPercent = 60.7;
    }
    if(depthMeas === undefined || depthMeas === 0){
      depthMeas = depthPercent * 0.01 * avgGirdleDiam;
    }
    let calculation = avgGirdleDiam * avgGirdleDiam * depthMeas * 0.0061;
    let rounded = Number(parseFloat(calculation).toFixed(2));
    return rounded;
    
  }
  
  function writeCaratToPage() {
    let inputForm = document.getElementById('inputForm');
    let textbox = document.getElementById('caratBox');
    let maxDiam = Number(inputForm.elements['maxDia'].value);
    let minDiam = Number(inputForm.elements['minDia'].value);
    let depthMeas = Number(inputForm.elements['depthMea'].value);
    let depthPercent = Number(inputForm.elements['depthPerc'].value);
  
    if (maxDiam === 0) {
      alert('Please enter a Maximum Diameter');
      return;
    }
    
    let text = roundDiaEstimator(maxDiam,minDiam,depthMeas,depthPercent);
  
    if (text)
      textbox.innerText = 'Est Weight: ' + text + 'ct';
    else
      textbox.innerHTML = "<br/>";
  }