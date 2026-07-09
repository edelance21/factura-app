import React from 'react'

const ClientField = ({ clientName, errors, onClientNameChange,  clientDoc, onClientDocChange, clientNcf, onClientNcfChange }) => {
  return (
    <section>
        <h2 className='text-lg font-medium text-white sm:text-xl'>Datos del cliente</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
            <div>
                <label htmlFor='client-name' className="mb-2 block text-sm font-medium text-slate-200">
                    Nombre del cliente
                </label>
                <input
                id='client-name'
                type='text'
                value={clientName}
                onChange={(event) => onClientNameChange(event.target.value)}
                placeholder="Ej. Enmanuel Delance"
                className="w-full rounded-xl border border-slate-700 bg-slate-950/70 px-4 py-2.5 text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-400/50"
                />
                {/* POSIBLE ERROR */}
                {errors.clientName ? <p className="mt-2 text-xs text-red-400">{errors.clientName}</p> : null}
                
            </div>
            <div>
                {/* RNC */}
                <label htmlFor='client-doc' className='mb-2 block text-sm font-medium text-slate-200'>
                    RNC/Cedula
                </label>
                <input 
                    id='client-doc'
                    type='text'
                    value={clientDoc}
                    onChange={(event) => 
                        onClientDocChange(event.target.value)
                    }
                    placeholder='Ej: 001-2682431-6'
                    className='w-full rounded-xl border border-slate-700 bg-slate-950/70 px-4 py-2.5 text-sm
                    text-slate-200 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-offset-emerald-400/500'
                />
                {errors.clientDoc ? <p className="mt-2 text-xs text-red-400">{errors.clientDoc}</p> : null}

            </div>
            <div>
            {/* COMPROBANTE FISCAL */}
            <label htmlFor='client-ncf' className='mb-2 block text-sm font-medium text-slate-200'>
                NCF
            </label>
            <input
                id='client-ncf'
                type='text'
                value={clientNcf}
                maxLength={11}
                onChange={(event) => 
                    onClientNcfChange(event.target.value)
                }
                placeholder="Ej. B0100000001"
                className='w-full rounded-xl border border-slate-700 bg-slate-950/70 px-4 py-2.5 text-sm
                text-slate-200 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-400/50'
            />
            {errors.clientNcf ? <p className="mt-2 text-xs text-red-400">{errors.clientNcf}</p> : null}
            </div>
        </div>
    </section>
  )
}

export default ClientField