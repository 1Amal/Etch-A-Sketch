/*
*****Pseudo Code*****
Create a containerDiv with a maximum pixel size of 960px*960px

Then create a webpage with a 16x16 grid of square Divs using JavaScript inside the ContainerDiv: Use JS and CSS

Make each Div appear as a grid with size as set by gridSize: Use JS

border and margin to be zero: Use CSS

Each div to have a unique ID and One Class with corresponding CSS

When the mouse enters a Div check the ID of the Div and assign a new class with a different color CSS code

After above code works change the code to add a Button when clicked generates a popup asking for numberOfSquaresPerSide with a maximum number of 100, maximum pixel size of 960px*960px should not change

After submission of popup remove the old grid and create a new grid with numberOfSquaresPerSide within containerDiv with a maximum pixel size of 960px*960px

After above code works randomize RGB value after hovering.

After above code works, implement a progressive darkening effect where each interaction adds 10% more black or color to the square. The objective is to achieve a completely black square only after ten interactions.

*/
let gridStatus=0;
start();
// Following logic will check whether grid is created and reset if required
function start()
{
    if (gridStatus==0)
    {
        createGrid();
        gridStatus=1;
    }

    else
    {
    location.reload();
    // alert("Refreshing Grid");

    }
    
}



function createGrid () // This function will create the grid
{
 
    
    let numberOfSquaresPerSide=prompt("Please enter grid size");
    if (numberOfSquaresPerSide<=100)
    {
        let gridSize=numberOfSquaresPerSide*numberOfSquaresPerSide;
        console.log(gridSize);
        for (let i=0; i<gridSize; i++)
            {
                console.log(i);
                const containerDiv=document.querySelector("#containerDiv");
                const gridDivs=document.createElement('div');
                gridDivs.classList.add("gridDivs"); //Set class for all Grid Div's
                gridDivs.setAttribute("id",i); //Set a unique ID to each Grid Div's
                // content.textContent="1";
                // Following code will change the color of the Div after mouse has hovered over the Div
                gridDivs.addEventListener('mouseover', (f)=>{
                    f.target.style.background='blue';
                    console.log(f);
                });
    
                containerDiv.appendChild(gridDivs);
    
             }
    }

    else{
        alert("Grid size needs to be below 100")
    }

         
}

// createGrid();
