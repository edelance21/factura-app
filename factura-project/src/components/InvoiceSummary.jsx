import { currencyFormatter } from "../utils/formatters";
import { ITBIS_RATE } from "../utils/invoiceCalculations";

import React from 'react'

const InvoiceSummary = ({ subtotal, itbis, total, showItebisRate = false }) => {
  return (
    <dl className="space-y-3 text-sm">
        {/* FILA SUBTOTAL */}
        <div className="flex items-center justify-between text-slate-300 print:text-slate-600">
            <dt>Subtotal</dt>
            <dd>{currencyFormatter.format(subtotal)}</dd>
        </div>

        {/* FILA DE ITBIS */}
        <div className="flex items-center justify-between text-slate-300 print:text-slate-600">
            <dt>ITBIS{showItebisRate ? ` (${(ITBIS_RATE * 100 ).toFixed(0)}%)` :''}</dt>
            <dd>{currencyFormatter.format(itbis)}</dd>
        </div>

        {/* FILA TOTAL */}
        <div className="flex items-center justify-between border-t border-slate-800 pt-3 text-base font-semibold text-white print:border-slate-300 print:text-slate-900">
            <dt>Total</dt>
            <dd>{currencyFormatter.format(total)}</dd>
        </div>
    </dl>
  )
}

export default InvoiceSummary