import React, { useState } from 'react'
import ClientField from '../components/ClientField'



const HomePage = ({ handleSubmit }) => {

    const [clientName, setClientName] = useState("");
    const [errors, setErrors] = useState({});
    const [handleClientName, sethandleClientName] = useState("")
    const [handleClientDocName, sethandleClientDocName] = useState("")
    const [handleClientNcfName, sethandleClientNcfName] = useState("")

    
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
                errors={errors}
                onClientNameChange={setClientName}
                onClientDocName={handleClientDocName}
                onClientNcfName={handleClientNcfName}
                />
                {/* TABLA EDITABLE */}
                
            </>
        </div>
    </section>
  )
}

export default HomePage