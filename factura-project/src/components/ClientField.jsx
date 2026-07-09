import React from 'react'

const ClientField = ({ clientName, errors, onClientNameChange }) => {
  return (
    <setcion>
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

        </div>
    </setcion>
  )
}

export default ClientField