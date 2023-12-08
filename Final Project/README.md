# Final Project Instructions 

## **Prerequisites**
> [!IMPORTANT]
> Please follow prerequisites.

Install **Java17** 
```bash 
sudo dnf install java-1.8.0-openjdk-devel
sudo update-alternatives --config java 
```

Install **Maven**
```bash 
sudo dnf install maven
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

# Build the React project
npm run build
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




