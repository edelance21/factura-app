import React, { useState } from 'react'
import ClientField from '../components/ClientField'
import ProductsTable from '../components/ProductsTable';
import { useInvoiceForm } from '../hooks/useInvoiceForm';
import InvoiceSummary from '../components/InvoiceSummary';




const HomePage = () => {

    const {
    clientName,       // nombre del cliente escrito en el formulario
    clientDoc,        // RNC o cédula del cliente
    clientNcf,        // número de comprobante fiscal
    products,         // lista de productos agregados
    invoice,          // factura generada (null si aún no se envió)
    errors,           // errores de validación de cada campo
    subtotal,         // suma de todos los productos sin impuesto
    itbis,            // impuesto calculado (18%)
    total,            // subtotal + itbis
    handleProductChange,      // actualiza un campo de un producto
    handleProductBlur,        // normaliza la cantidad al salir del input
    handleAddProduct,         // agrega una fila nueva a la tabla
    handleRemoveProduct,      // elimina un producto de la lista
    handleClientNameChange,   // actualiza el nombre del cliente
    handleClientDocChange,    // actualiza el documento del cliente
    handleClientNcfChange,    // actualiza el NCF del cliente
    handleNewInvoice,         // limpia todo para hacer una factura nueva
    handleSubmit,             // valida y genera la factura
  } = useInvoiceForm()

    
  return (
    <section className='flex flex-1 justify-center py-6 sm:py-10'>
        <div className="w-full max-w-6xl">
            <>  
                <header className="mb-6 sm:mb-8">
                    <h1>Generador de facturas</h1>
                </header>

                {/* FORMULARIO PRINCIPAL */}
                <form 
                    onSubmit={handleSubmit} 
                    className='rounded-3xl border border-slate-800 bg-slate-900/70 p-5 shadow-2xl shadow-slate-950/40 backdrop-blur sm:p-8'
                />
                {/* Cliente */}
                <ClientField
                    clientName={clientName}
                    clientDoc={clientDoc}
                    clientNfc={clientNcf}
                    errors={errors}
                    onClientNameChange={handleClientNameChange}
                    onClientDocName={handleClientDocChange}
                    onClientNcfName={handleClientNcfChange}
                />
                {/* TABLA DE PRODUCTOS */}
                <ProductsTable
                    products={products}
                    errors={errors}
                    onProductChange={handleProductChange}
                    onProductBlur={handleProductBlur}
                    onAddProduct={handleAddProduct}
                    onRemoveProduct={handleRemoveProduct}
                />

                {/* CAJA DE RESUMEN QUE CONTIENE SUBTOTAL, ITBIS Y TOTAL */}
                <section className='mt-6 flex justify-end'>
                    <div>
                        <h3>Resumen</h3>
                        <div>
                            <InvoiceSummary subtotal={subtotal} itbis={itbis} total={total} />
                        </div>
                    </div>
                </section>

            </>
        </div>
    </section>
  )
}

export default HomePage