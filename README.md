# Dimensional Analysis

Physical quantities are calculated based on the **International System of Units** (SI). This tool uses mathematical vectors to determine the dimensional consistency of physical formulas.

Try it out at [komed3.github.io/dimensional-calculator](https://komed3.github.io/dimensional-calculator).

## SI Base Dimensions

The following seven base dimensions form the foundation of the SI system. Every physical quantity can be expressed as a product of these dimensions.

| Dimension | Symbol | Base Unit | Unit Symbol |
| :--- | :---: | :--- | :---: |
| Time | T | second | s |
| Length | L | metre | m |
| Mass | M | kilogram | kg |
| Electric Current | I | ampere | A |
| Thermodynamic Temperature | Θ | kelvin | K |
| Amount of Substance | N | mole | mol |
| Luminous Intensity | J | candela | cd |

## Dimension Vector

Every quantity is defined by a seven-dimensional vector `[ T, L, M, I, Θ, N, J ]`. The integers in the vector represent the exponents of the corresponding base units. Velocity is defined as length per time, resulting in the vector `[ -1, 1, 0, 0, 0, 0, 0 ]`. This notation provides a unique identifier for any physical dimension.

## Calculation Logic

Dimensional calculations follow vector algebra. Multiplication of physical quantities corresponds to the addition of their respective dimension vectors. Division is performed by subtracting the vector of the divisor from the dividend. This logic enables the tracking of unit exponents through complex mathematical operations.

Read more about [dimensional analysis](https://en.wikipedia.org/wiki/Dimensional_analysis) on Wikipedia.
