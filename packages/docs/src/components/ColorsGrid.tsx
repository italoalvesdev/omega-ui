import { colors as tokens } from '@omega-ui/tokens'
import { getContrast } from 'polished'

type Color = {
  value: string
  alias?: string
}

const colors: { [k: string]: Color } = {}

Object.entries(tokens).forEach(([key, value]) => {
  const baseColor = Object.entries(colors).find(
    ([, color]) => color.value === value,
  )

  if (baseColor) {
    colors[baseColor[0]].alias = key
  } else {
    colors[key] = { value }
  }
})

export function ColorsGrid() {
  return Object.entries(colors).map(([key, color]) => {
    return (
      <div key={key} style={{ backgroundColor: color.value, padding: '2rem' }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            fontFamily: 'monospace',
            color: getContrast(color.value, '#FFF') < 3.5 ? '#000' : '#FFF',
          }}
        >
          <strong>${key}</strong>
          {color.alias && <span>${color.alias}</span>}
          <span>{color.value}</span>
        </div>
      </div>
    )
  })
}
