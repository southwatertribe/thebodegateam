# React Dynamic Star

A Highly Customizable, easy-to-use elegant stars rating component.
This component is a port of an open-source component made in vue, you can access the repo in **[Vue Star Rating](https://github.com/JonathanDn/vue-stars-rating)**.

# Demo

![Full](https://github.com/igorwessel/react-dynamic-star/blob/main/src/assets/full_dynamic_star.png "Full")

![Outlined](https://github.com/igorwessel/react-dynamic-star/blob/main/src/assets/outlined_dynamic_star.png "Outlined")

[![Edit react-dynamic-star-example](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/react-dynamic-star-example-8cvcg?fontsize=14&hidenavigation=1&theme=dark)

# Usage

1. Install via npm or yarn
```sh
yarn add react-dynamic-star

npm install react-dynamic-star
```

2. Import in project
```jsx
import { DynamicStar } from 'react-dynamic-star';
```

3. Use
```jsx
const App = () => { 

    return (
        <div>
            <DynamicStar rating={5} />
        </div>
    )
}
```
# Props

| Property | Type  | Description | Default
| --- | ---  | --- | --- |
| **rating\*** | Number  | A number between 0.0-totalStars that will determine the fullness of the stars rating polygons
| **outlined?** | Boolean, String | Use only outlined, the stroke color will use the fullStarColor, pass the color for he the outlined color will use.
| **outlineWidth?** | Number | The width for outline
| **sharpnessStar?** | Number| Define the sharpness/fatness of a star | 2.5
| **totalStars?** | Number | Define total of stars | 5
| **width?** | Number | Define width of a star | 100
| **height?** | Number | Define height of a star |100
| **emptyStarColor?** | String | Define empty color when star is not filled | transparent
| **fullStarColor?** | String | Define full star color when star is filled | #FFBC00