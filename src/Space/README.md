# `Space<Axis>($0)`

```css
.Space<Axis>($0) {
  --space-<axis>: $0
}

[class*=Space<Axis>] > * + *: {
  margin-<side>: var(--space-<Axis>)
}
```
