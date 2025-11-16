# ReactJS :
developed by meta.
react is a library of JS used for building user interface. It automatically update the UI when data changes. It also uses a concept of virtual DOM.
It divides the webage into seprate components and then load them indivisually.
## Virtual Dom :
update the user interface efficiently by first applying changes to this virtual copy and then updating only the changed parts of the real DOM, instead of re-rendering the entire page.
## JSX:
Javascript + HTML
## Vite Bundler :
it starts the server instantly , only load the files which browser actually request, uses browser native ESM and also converts the JSX files into plain HTML,CSS, JS files that browser can understand.

In react you can only pass evaluated expressions and can perform basic calculation.You cannt write the whole logic like loops and conditons in it.

# Reconcillation :
process react use to update the real DOM based on the changes in the component state. Ie does not re-writes the DOM immediately rather it create a new node i.e a new virtual dom and compares it to the previous virtual dom and then determines the minimal changes need to be done in the dom . This prevents the re-rendering of dom and increase the efficiency.

props: a way to send data from a parentt component from parent component to a child component.

# Hooks :
It is a feature of react that allows you to access the features of React in functional components rather than using the traditonal class components which makes it a lot more esaier to manage.
It should be always defined at the top of the functional components and cannot be defined inside a loop, conditional statement, nested loops and inside a class components.
### state: 
built in object of a component that holds the data specific to the component. here data refers to the memory of the component.So whenever this state changes this component gets re-renders to reflect the new data in UI.

### memoisation :
optimization technique used in react to make it more efficient i.e rather than  re-rendering everything for every small changes it will only re-render if certain dependencies are modeified by using a hook called useMemo().


# useCallback() :
When your component re-renders, any functions you define inside it are created again—so they're new each time, even if their logic hasn't changed.
useCallback helps you “save” (cache) a function so React doesn’t make a new one after every render unless its data (called dependencies) changes.