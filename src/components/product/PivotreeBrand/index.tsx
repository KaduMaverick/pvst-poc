import React from 'react'

interface PivotreeBrandProps {
  brand: string
}

const PivotreeBrand = ({ brand }: PivotreeBrandProps) => {
  return <div>{brand}</div>
}

export default PivotreeBrand
