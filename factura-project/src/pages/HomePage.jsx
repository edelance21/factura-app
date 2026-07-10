import React, { useState } from 'react'
import ClientField from '../components/ClientField'
import ProductsTable from '../components/ProductsTable';
import { useInvoiceForm } from '../hooks/useInvoiceForm';
import InvoiceSummary from '../components/InvoiceSummary';
import InvoiceView from '../components/InvoiceView';




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

            {/* Si ya se generó la factura mostramos la vista de factura, si no mostramos el formulario */}
            {invoice ? (
                <InvoiceView invoice={invoice} onNewInvoice={handleNewInvoice} />
            ) : (
            <>  
                <header className="mb-6 sm:mb-8">
                    <h1 className='text-center text-3xl font-semibold tracking-tight text-white sm:text-4xl'>Generador de facturas</h1>
                </header>

                {/* FORMULARIO PRINCIPAL */}
                <form 
                    onSubmit={handleSubmit} 
                    className='rounded-3xl border border-slate-800 bg-slate-900/70 p-5 shadow-2xl shadow-slate-950/40 backdrop-blur sm:p-8'
                >
                {/* Cliente */}
                <ClientField
                    clientName={clientName}
                    clientDoc={clientDoc}
                    clientNcf={clientNcf}
                    errors={errors}
                    onClientNameChange={handleClientNameChange}
                    onClientDocChange={handleClientDocChange}
                    onClientNcfChange={handleClientNcfChange}
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
                <section className='mt-8 flex justify-end'>
                    <div className='w-full max-w-xs border rounded-2xl border-slate-800 bg-slate-950
                    sm:p-5'>
                        <h3 className='text-base font-medium text-white'>Resumen</h3>
                        <div className='mt-4'>
                            <InvoiceSummary subtotal={subtotal} itbis={itbis} total={total} />
                        </div>
                    </div>
                </section>
                {/* BOTON PARA ENVIAR EL FORMULARIO */}
                <div className='mt-6 flex justify-end'>
                    <button
                        type='submit'
                        className='inline-flex items-center rounded-xl border border-cyan-400/300 
                        bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-300 cursor-pointer 
                        transition hover:bg-cyan-400/20 focus:outline-none focus:ring-2 focus:ring-cyan-400/50'
                    >
                        Enviar factura
                    </button>
                </div>
                </form>
            </>
            )}
        </div>
    </section>
  )
}

export default HomePage