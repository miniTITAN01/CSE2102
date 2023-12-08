# Final Project Instructions 

<div style="text-align:center">
  <img src="screenShot.png" alt="My Image" width="600">
</div>


## **Prerequisites**
> [!IMPORTANT]
> Please follow prerequisites.

Setup **React** 
```bash 
sudo dnf install nodejs
npm add react --save
npm add react-scripts –save
 ```

## **Clone the Repo**

1. Navigate to the directory where you want to store the project 
2. Clone the repository 
``` bash 
    git clone https://github.com/miniTITAN01/CSE2102.git
    
    #if you are using ssh 

    git clone git@github.com:miniTITAN01/CSE2102.git
```

3. Enter your Github credentials if prompted. 
4. Once the cloning process is complete, navigate to the project directory. 

## **Instructions** 

1. Give permissions to folder 
```
chmod -R a+rwx demo  
```

2. Build our React project 
```
# Navigate to the React project directory (assuming the project structure is set up)
cd path/to/your/react/project

# Install project dependencies (if not done already)
npm install

# Install react-router-dom dependency
npm install react-router-dom

# Build the React project
npm run build

# Install testing library to run tests
npm install --save-dev @testing-library/react @testing-library/jest-dom
```

3. Run our React project 
```
# Start the development server
npm start
```
4. Test the React project
```
npm test
```




