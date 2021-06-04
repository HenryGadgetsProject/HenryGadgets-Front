import React, { useState } from 'react'
import { useSelector } from "react-redux";
import Table from "../../Components/Atoms/TablitaAnalizadora";

import styled from "styled-components";

const NumbersContainer = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center ;
  align-self: center;
  background: inherit;
  padding: 0;
  margin-top: 4em;
`
const TablaInformacion = () => {
  const clientOrders = useSelector((state) => state.order.filteredOrders);
  for (var i = 0; i < clientOrders.length; i++) {
    clientOrders[i].created_at=clientOrders[i].created_at.substring(0,10)
  }
    clientOrders.sort((x, y) => {
      if (x.created_at < y.created_at) return 1;
      if (x.created_at > y.created_at) return -1;
      return 0
    });
  // ******************** Paginado ********************

  // Guardo la información en un estado
  // const [data, setData] = useState([])

  // Página actual, inicializada en 1
  const [currentPage, setCurrentPage] = useState(1)
  // Cards o Items que voy a mostrar por página
  const [itemsPerPage] = useState(8)

  // Número de páginas que quiero mostrar
  const [pageNumberLimit] = useState(5)
  // Máximo de páginas
  const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(5)
  // Mínimo de páginas
  const [minPageNumberLimit, setMinPageNumberLimit] = useState(0)

  // En cada página voy a insertar las cards
  const pages = [];
  for (let i = 1; i <= Math.ceil(clientOrders.length / itemsPerPage); i++) {
      pages.push(i)
  }

  // Información de los items que voy a mostrar en cada página
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentItems = clientOrders.slice(indexOfFirstItem, indexOfLastItem)

  const handleClick = (event) => {
      setCurrentPage(Number(event.target.id))
  }
  const handleNextBtn = () => {
      setCurrentPage(currentPage + 1)
      if (currentPage + 1 > maxPageNumberLimit) {
          setMaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit)
          setMinPageNumberLimit(minPageNumberLimit + pageNumberLimit)
      }
  }
  const handlePrevBtn = () => {
      setCurrentPage(currentPage - 1)
      if ((currentPage - 1) % pageNumberLimit === 0) {
          setMaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit)
          setMinPageNumberLimit(minPageNumberLimit - pageNumberLimit)
      }
  }

  let pageIncrementBtn = null
  if (pages.length > maxPageNumberLimit) {
      pageIncrementBtn = <button onClick={handleNextBtn}>&hellip;</button>
  }

  let pageDecrementBtn = null
  if (minPageNumberLimit >= 1) {
      pageDecrementBtn = <button onClick={handlePrevBtn}>&hellip;</button>
  }

  // Renderizamos los números de las páginas como (<Li>)
  const renderPageNumbers = pages.map(number => {
      if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
          return (
              <li
                  className={currentPage === number ? "active btn-pag" : "btn-pag"} key={number} id={number} onClick={handleClick}>
                  {number}
              </li>
          )
      } else {
          return null;
      }
  })

  // ******************** Paginado ********************
  return (
    <Table>
      <caption>Últimas compras realizadas</caption>
      <thead>
        <tr>
          <th>ID de compra</th>
          <th>Fecha de compra</th>
          <th className="name">Producto(s)</th>
          <th>Cantidad</th>
          <th>Precio unitario</th>
          <th>Cliente ID</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody className="idAnalytics">
        {currentItems.map((order) => {
          if (order.state === "completed") {
            return (
              <tr key={order.id}>
                <td data-label="ID de compra" className="idAnalytics">{order.id}</td>
                <td data-label="Fecha de compra">{order.created_at}</td>
                <td data-label="Producto(s)">
                  {order.orderDetails.map((producto) => (
                    <p key={producto.id}>{producto.product.name}</p>
                  ))}
                </td>
                <td data-label="Cantidad">
                  {order.orderDetails.map((producto) => (
                    <p key={producto.id}>{producto.quantity}</p>
                  ))}
                </td>
                <td data-label="Precio unitario">
                  {order.orderDetails.map((producto) => (
                    <p key={producto.id}>${producto.unit_price}</p>
                  ))}
                </td>
                <td data-label="Cliente ID">{order.user.id}</td>
                <td data-label="Total">${order.total_price}</td>
              </tr>
            );
          }
          return;
        })}
      </tbody>
      <NumbersContainer>
        <button className="btn-pag" onClick={handlePrevBtn} disabled={currentPage === pages[0] ? true : false}>Anterior</button>
        {pageDecrementBtn}
        {renderPageNumbers}
        {pageIncrementBtn}
        <button className="btn-pag" onClick={handleNextBtn} disabled={currentPage === pages[pages.length - 1] ? true : false}>Siguiente</button>
      </NumbersContainer>
    </Table>
  );
};

export default TablaInformacion;
