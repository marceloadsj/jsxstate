## `MachineContext`

<br/>

A standard React context instance

---

<br/>

The React context used on the library works in a way you can access any store of the tree by its level.
That approach allows us to have control of the closest machine, and the machines above that, so you can just target it in an easy way.

Always remember that the closest machine will be targeted if no _machineId_ is used.
Check the examples below to understand how it works.

<br/>

### Examples:

```jsx
const userMachine = Machine({
  id: 'user'
  // ...
})

const counterMachine = Machine({
  id: 'counter'
  // ...
})

function Component() {
  return (
    <Interpret machine={userMachine}>
      <Interpret machine={counterMachine}>
        <!-- Here, you will have access to userMachine and counterMachine, because you are inside the three of both -->

        <!-- The closest machine is the counterMachine -->
        <!-- The Value component will show the state of the counterMachine -->
        <p>
          Counter Machine State: <Value />
        </p>

        <!-- But you can pass a machineId to target another machine on the same tree -->
        <p>
          User Machine State: <Value machineId='user' />
        </p>
      </Interpret>

      <!-- Now, here, you just have access to userMachine -->
      <p>
        User Machine State: <Value />
      </p>

      <!-- And if you want to use the an equal machine on the same tree, you can add another id -->
      <Interpret machine={userMachine} id='friend'>
        <Interpret machine={counterMachine}>
          <!-- Then you can target both machines differently -->
          <p>
            User Machine State: <Value machineId='user' />
          </p>

          <!-- The machine.id will not be changed, only the pointer to it inside the React context -->
          <p>
            (Friend) User Machine State: <Value machineId='friend' />
          </p>
        </Interpret>
      </Interpret>
    </Interpret>
  )
}
```
