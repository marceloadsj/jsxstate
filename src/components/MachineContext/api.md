## `MachineContext`

A standard React context instance

---

The React context used on the library works in a way you can access any store of the tree by its level.
That approach allows us to have control of the closest machine, and the machines above that, so you can just target it in an easy way.

Always remember that the closest machine will be targeted if no _machineId_ is used.
Check the examples below to understand how it works.

### Examples:

```jsx
const userMachine = Machine({ id: 'user', /* ... */ })
const counterMachine = Machine({ id: 'counter', /* ... */ })

function Component() {
  return (
    <Interpret machine={userMachine}>
      <Interpret machine={counterMachine}>
        <!-- Here, you will have access to userMachine and counterMachine -->
      </Interpret>
    </Interpret>
  )
}
```

```jsx
const userMachine = Machine({ id: 'user', /* ... */ })
const counterMachine = Machine({ id: 'counter', /* ... */ })

function Component() {
  return (
    <Interpret machine={userMachine}>
      <Interpret machine={counterMachine}>
        <!-- The closest machine is the counterMachine, so the value will target it -->
        <p>
          Counter Machine State: <Value />
        </p>
      </Interpret>
    </Interpret>
  )
}
```

```jsx
const userMachine = Machine({ id: 'user', /* ... */ })
const counterMachine = Machine({ id: 'counter', /* ... */ })

function Component() {
  return (
    <Interpret machine={userMachine}>
      <Interpret machine={counterMachine}>
        <!-- But you can pass a machineId to target another machine on the same tree -->
        <p>
          User Machine State: <Value machineId='user' />
        </p>
      </Interpret>
    </Interpret>
  )
}
```

```jsx
function Component() {
  return (
    <Interpret machine={userMachine}>
      <Interpret machine={counterMachine}>
        <!-- ... -->
      </Interpret>

      <!-- Here, you just have access to userMachine -->
      <p>
        User Machine State: <Value />
      </p>
    </Interpret>
  )
}
```

```jsx
function Component() {
  return (
    <Interpret machine={userMachine}>
      <Interpret machine={counterMachine}>
        <!-- ... -->
      </Interpret>

      <!-- If you want to use an equal machine on the same tree and target it with machineId, you can pass another id -->
      <Interpret machine={userMachine} id='friend'>
        <!-- ... -->
      </Interpret>
    </Interpret>
  )
}
```

```jsx
function Component() {
  return (
    <Interpret machine={userMachine}>
      <Interpret machine={counterMachine}>
        <!-- ... -->
      </Interpret>

      <Interpret machine={userMachine} id='friend'>
        <Interpret machine={counterMachine}>
          <!-- Then you can target both machines differently by their id -->
          <p>
            User Machine State: <Value machineId='user' />
          </p>
        </Interpret>
      </Interpret>
    </Interpret>
  )
}
```

```jsx
function Component() {
  return (
    <Interpret machine={userMachine}>
      <Interpret machine={userMachine} id='friend'>
        <Interpret machine={counterMachine}>
          <!-- The machine.id will not be changed, only the pointer to that instance inside the React context -->
          <p>
            (Friend) User Machine State: <Value machineId='friend' />
          </p>
        </Interpret>
      </Interpret>
    </Interpret>
  )
}
```

```jsx
function Component() {
  return (
    <Interpret machine={userMachine}>
      <Interpret machine={userMachine} id='friend'>
        <Interpret machine={counterMachine}>
          <!-- Remember, without machineId it will target the closest one -->
          <p>
            Counter Machine State: <Value />
          </p>
        </Interpret>
      </Interpret>
    </Interpret>
  )
}
```
