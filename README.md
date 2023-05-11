# react-native-POC
Clean architecture
<img width="528" alt="Screenshot 2023-04-18 at 3 34 57 PM" src="https://user-images.githubusercontent.com/129162542/232744407-af0074fd-d676-4684-9488-1b4f75bdd348.png">

## Clean architecture
- Highly scalable
- Easy to understand and maintain.
- Testing is facilitated.
- Large scale applications are sufficiently layred and encapsulated
- Good Folder structure 

## Clean architecture - How we Implemented 

We know clean architecture have been arround for a while but we wanted to make it work with less boilerplate code.
So we did it with custom hooks and less object oriented programming so no dependancy injection dependencies are needed fot TDD.
Our Goals are 

- Highly scalable.
- Easy to understand and maintain.
- Easy for new developers to catch on and start working on it 
- Because all code is connected to eacth other visibally its easy to debug.
- Image Caching is implemented

<img width="1267" alt="Screenshot 2023-04-18 at 2 58 11 PM" src="https://user-images.githubusercontent.com/129162542/232734951-ed7506e0-060d-4ade-99d0-01977deb7fbf.png">


## Presentation Layer
- Navigation screens and Custom components 
- UI constants like colors and margins 

## Domain layer
- Use case hooks for screens 
- use case hooks subscribed to the replay subject of Rx js object which will revert all the positive response data
- As we have added rx observables we can debounce , throttle and filter on the output before creating an entity of data

## Data layer
- custom hooks for working on fetching data from remote or from local data
- adding next event in observable from domain layer so that the hook of use case gets event executed in subscription 


## Improvements 
- We can add height width normalization library for responsive layouts and not relay on aspect raio too much
- We can save dat in secondary storage like realm or async storage so that we can check if data exists and display before its loaded from remote 
- Pull to refresh from home screen



