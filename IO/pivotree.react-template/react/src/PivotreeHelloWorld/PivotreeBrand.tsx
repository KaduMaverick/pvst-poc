import React from 'react'

interface PivotreeBrandProps<T> {
    brand: string;
}

const PivotreeBrand = <T extends unknown>({brand}: PivotreeBrandProps<T>) => {
  return (
    <div>{brand}</div>
  )
}

export default PivotreeBrand