const form = document.querySelector('form')
const tableBody = document.querySelector('#employeeList')
const message = 'Are you sure you want to delete this employee ?'

form.addEventListener('submit', (e) => {
  e.preventDefault()
  const formData = new FormData(e.target)

  const row = document.createElement('tr')

  // add td into row
  formData.forEach((value, key) => {
    const cell = document.createElement('td')
    if (value instanceof File) {
      // if image create img element
      const img = document.createElement('img')
      img.src = URL.createObjectURL(value)
      img.width = 50
      cell.appendChild(img)
      row.prepend(cell)
    } else {
      // if not image
      const cellContent = document.createTextNode(value)
      cell.appendChild(cellContent)
      row.appendChild(cell)
    }
  })
  // add deletebutton
  deleteCell = document.createElement('td')
  const delBtn = document.createElement('button')
  delBtn.style.fontSize = '1rem'
  delBtn.style.padding = '4px 8px'
  const cellContent = document.createTextNode('Delete')
  delBtn.appendChild(cellContent)
  delBtn.addEventListener('click', (e) => {
    const ok = confirm(message)
    if (ok) {
      const tgtRow = e.target.parentElement.parentElement
      tgtRow.remove()
    }
  })
  deleteCell.appendChild(delBtn)
  row.appendChild(deleteCell)

  // add row to table
  tableBody.appendChild(row)

  form.reset()
})
