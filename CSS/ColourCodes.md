# Difference between Hex vs. RGB vs. RGBA?

There's no differences between a RGB and hex color.
hex to decimal :
FF = 255
`=> #FFFFFF = rgb(255,255,255)`

## When you break down the hexa color :
#FF  FF    FF
red green blue

But with rgba (alpha) you can add a alpha variable it add an opacity to your color.

You can use RGB and HEX it depends of your preferences

```
.rgb{
  background-color:rgb(124,220,50); /* to hexa = 7C, DC, 32 */
}

.hexa{
  background-color:#7CDC32;
}

.rgba{
  background-color:rgba(124,220,50,0.2); /* opacity = 20% */
}
```