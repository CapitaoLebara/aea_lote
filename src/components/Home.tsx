import React from 'react'
import { useState } from 'react'

import ma from './img/aea.jpg'


const Home = () => {
    
const [metro,setMetro]=useState("")
const [vista,setVista]=useState("")


const [vistaJ12,setVistaJ12]=useState("")
const [parce12,setParce12]=useState("")

const [vistaJ24,setVistaJ24]=useState("")
const [parce24,setParce24]=useState("")


const [vistaJ36,setVistaJ36]=useState("")
const [parce36,setParce36]=useState("")


const [vistaJ48,setVistaJ48]=useState("")
const [parce48,setParce48]=useState("")


const [vistaJ60,setVistaJ60]=useState("")
const [parce60,setParce60]=useState("")

const [vistaJ80,setVistaJ80]=useState("")
const [parce80,setParce80]=useState("")

const [vistaJ100,setVistaJ100]=useState("")
const [parce100,setParce100]=useState("")

const [vistaJ120,setVistaJ120]=useState("")
const [parce120,setParce120]=useState("")

const [vistaJ140,setVistaJ140]=useState("")
const [parce140,setParce140]=useState("")

const [vistaJ200,setVistaJ200]=useState("")
const [parce200,setParce200]=useState("")

function calcular(){
    const x = parseFloat(metro)
    console.log(x+1)
    var porMetro= 57.14
    var J = 0.00429
    var p12 = 12
    var JP = J*p12

/*=============================================*/

    /*==== LOT A VISTA ====*/
    var lotAvista=x*porMetro
    setVista(lotAvista.toFixed(2))
    /*==== LOT A VISTA COM JUROS ====*/
    var avistcomJuros = lotAvista+(lotAvista*JP)
    setVistaJ12(avistcomJuros.toFixed(2))
    /*VALOR DAS PARCELAS DO LOTE*/
    var parcelado = avistcomJuros/p12
    setParce12( parcelado.toFixed(2))

/*=============================================*/
    /*==== 24 ====*/
    var p24 = 24
    var JP24 = J*p24
        /*==== LOT A VISTA ====*/
        var lotAvista=x*porMetro
        setVista(lotAvista.toFixed(2))
        /*==== LOT A VISTA COM JUROS ====*/
        var avistcomJuros = lotAvista+(lotAvista*JP24)
        setVistaJ24(avistcomJuros.toFixed(2))
        /*VALOR DAS PARCELAS DO LOTE*/
        var parcelado = avistcomJuros/p24
        setParce24( parcelado.toFixed(2))

/*=============================================*/

         /*==== 36 ====*/
    var p36 = 36
    var JP36 = J*p36
        /*==== LOT A VISTA ====*/
        var lotAvista=x*porMetro
        setVista(lotAvista.toFixed(2))
        /*==== LOT A VISTA COM JUROS ====*/
        var avistcomJuros = lotAvista+(lotAvista*JP36)
        setVistaJ36(avistcomJuros.toFixed(2))
        /*VALOR DAS PARCELAS DO LOTE*/
        var parcelado = avistcomJuros/p36
        setParce36( parcelado.toFixed(2))

/*=============================================*/

         /*==== 48 ====*/
         var p48 = 48
         var JP48 = J*p48
             /*==== LOT A VISTA ====*/
             var lotAvista=x*porMetro
             setVista(lotAvista.toFixed(2))
             /*==== LOT A VISTA COM JUROS ====*/
             var avistcomJuros = lotAvista+(lotAvista*JP48)
             setVistaJ48(avistcomJuros.toFixed(2))
             /*VALOR DAS PARCELAS DO LOTE*/
             var parcelado = avistcomJuros/p48
             setParce48( parcelado.toFixed(2))

/*=============================================*/
/*==== 60 ====*/
var p60 = 60
var JP60 = J*p60
    /*==== LOT A VISTA ====*/
    var lotAvista=x*porMetro
    setVista(lotAvista.toFixed(2))
    /*==== LOT A VISTA COM JUROS ====*/
    var avistcomJuros = lotAvista+(lotAvista*JP60)
    setVistaJ60(avistcomJuros.toFixed(2))
    /*VALOR DAS PARCELAS DO LOTE*/
    var parcelado = avistcomJuros/p60
    setParce60( parcelado.toFixed(2))

/*=============================================*/

/*==== 80 ====*/
var p80 = 80
var JP80 = J*p80
    /*==== LOT A VISTA ====*/
    var lotAvista=x*porMetro
    setVista(lotAvista.toFixed(2))
    /*==== LOT A VISTA COM JUROS ====*/
    var avistcomJuros = lotAvista+(lotAvista*JP80)
    setVistaJ80(avistcomJuros.toFixed(2))
    /*VALOR DAS PARCELAS DO LOTE*/
    var parcelado = avistcomJuros/p80
    setParce80( parcelado.toFixed(2))

/*=============================================*/

var p100 = 100
var JP100 = J*p100
    /*==== LOT A VISTA ====*/
    var lotAvista=x*porMetro
    setVista(lotAvista.toFixed(2))
    /*==== LOT A VISTA COM JUROS ====*/
    var avistcomJuros = lotAvista+(lotAvista*JP100)
    setVistaJ100(avistcomJuros.toFixed(2))
    /*VALOR DAS PARCELAS DO LOTE*/
    var parcelado = avistcomJuros/p100
    setParce100( parcelado.toFixed(2))

/*=============================================*/

var p120 = 120
var JP120 = J*p120
    /*==== LOT A VISTA ====*/
    var lotAvista=x*porMetro
    setVista(lotAvista.toFixed(2))
    /*==== LOT A VISTA COM JUROS ====*/
    var avistcomJuros = lotAvista+(lotAvista*JP120)
    setVistaJ120(avistcomJuros.toFixed(2))
    /*VALOR DAS PARCELAS DO LOTE*/
    var parcelado = avistcomJuros/p120
    setParce120( parcelado.toFixed(2))

/*=============================================*/
var p140 = 140
var JP140 = J*p140
    /*==== LOT A VISTA ====*/
    var lotAvista=x*porMetro
    setVista(lotAvista.toFixed(2))
    /*==== LOT A VISTA COM JUROS ====*/
    var avistcomJuros = lotAvista+(lotAvista*JP140)
    setVistaJ140(avistcomJuros.toFixed(2))
    /*VALOR DAS PARCELAS DO LOTE*/
    var parcelado = avistcomJuros/p140
    setParce140( parcelado.toFixed(2))

/*=============================================*/

var p200 = 200
var JP200 = J*p200
    /*==== LOT A VISTA ====*/
    var lotAvista=x*porMetro
    setVista(lotAvista.toFixed(2))
    /*==== LOT A VISTA COM JUROS ====*/
    var avistcomJuros = lotAvista+(lotAvista*JP200)
    setVistaJ200(avistcomJuros.toFixed(2))
    /*VALOR DAS PARCELAS DO LOTE*/
    var parcelado = avistcomJuros/p200
    setParce200( parcelado.toFixed(2))

}
  return (
        <form className='w-[640px] flex flex-col'>
            <div className=' items-center flex justify-center my-2'>
            <img src={ma} className='rounded-[200px]' alt="" />
            </div>
           
            <div className= 'flex mx-auto text-center w-full'>
                    <label className='border w-full border-black'><p className=' text-lg'> Metragem do lote:</p></label>
                        <input onChange={(e)=>setMetro(e.target.value)} type="number" className='font-medium outline-none w-full text-sm border border-black uppercase p-2 text-center' />
                </div>
                <div className= 'flex mx-auto text-center w-full'>
                    <label className='border w-full border-black'><p className=' text-lg'> Valor do metro Quadrado:</p></label>
                        <input type="text" value='57.14' className='font-medium outline-none w-full text-sm border border-black uppercase p-2 text-center' />
                </div>
                <div className= 'flex mx-auto text-center w-full'>
                    <label className='border w-full border-black'><p className=' text-lg'> Juros ao Mês:</p></label>
                        <input type="text" value='0.00429' className='font-medium outline-none w-full text-sm border border-black uppercase p-2 text-center' />
                </div>
                <div className= 'flex mx-auto text-center w-full'>
                    <label className='border w-full border-black'><p className=' text-lg'>Valor do Lote a vista:</p></label>
                        <input type="text" value={vista} className='font-medium outline-none w-full text-sm border border-black uppercase p-2 text-center' />
                </div>
                <div className=' text-center mt-4'>
                    <h1>Parcelas</h1>
                    <div className= 'flex flex-col  mx-auto text-center w-full'>
                        <div className=' flex flex-col'>
                        <label  className='border  p-1  text-center w-full border-black'><p className='text-lg'>12 parcelas</p></label>
                            <div className='flex w-auto'>
                                <div className='flex w-full flex-col'>
                                <label  className='border border-black'><p className='text-lg bg-black  text-white'>Lote a vista com juros</p></label>
                                <input value={vistaJ12} type="text"className='font-medium outline-none w-full text-sm border border-black uppercase p-1 text-center' />
                                </div>
                                <div className='flex w-full flex-col'>
                                <label  className='border border-black'><p className='text-lg bg-black text-white'>Valor das parcelas do Lote</p></label>
                                <input value={parce12} type="text"className='font-medium outline-none w-full text-sm border border-black uppercase p-1 text-center' />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className= 'flex flex-col  mx-auto text-center w-full'>
                        <div className=' flex flex-col'>
                        <label  className='border  p-1 text-center w-full border-black'><p className='text-lg'>24 parcelas</p></label>
                            <div className='flex w-auto'>
                                <div className='flex w-full flex-col'>
                                <label  className='border border-black'><p className='text-lg bg-black  text-white'>Lote a vista com juros</p></label>
                                <input value={vistaJ24} type="text"className='font-medium outline-none w-full text-sm border border-black uppercase p-1 text-center' />
                                </div>
                                <div className='flex w-full flex-col'>
                                <label  className='border border-black'><p className='text-lg bg-black text-white'>Valor das parcelas do Lote</p></label>
                                <input value={parce24} type="text"className='font-medium outline-none w-full text-sm border border-black uppercase p-1 text-center' />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className= 'flex flex-col  mx-auto text-center w-full'>
                        <div className=' flex flex-col'>
                        <label  className='border  p-1 text-center w-full border-black'><p className='text-lg'>36 parcelas</p></label>
                            <div className='flex w-auto'>
                                <div className='flex w-full flex-col'>
                                <label  className='border border-black'><p className='text-lg bg-black  text-white'>Lote a vista com juros</p></label>
                                <input value={vistaJ36} type="text"className='font-medium outline-none w-full text-sm border border-black uppercase p-1 text-center' />
                                </div>
                                <div className='flex w-full flex-col'>
                                <label  className='border border-black'><p className='text-lg bg-black text-white'>Valor das parcelas do Lote</p></label>
                                <input value={parce36} type="text"className='font-medium outline-none w-full text-sm border border-black uppercase p-1 text-center' />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className= 'flex flex-col  mx-auto text-center w-full'>
                        <div className=' flex flex-col'>
                        <label  className='border  p-1 text-center w-full border-black'><p className='text-lg'>48 parcelas</p></label>
                            <div className='flex w-auto'>
                                <div className='flex w-full flex-col'>
                                <label  className='border border-black'><p className='text-lg bg-black  text-white'>Lote a vista com juros</p></label>
                                <input value={vistaJ48} type="text"className='font-medium outline-none w-full text-sm border border-black uppercase p-1 text-center' />
                                </div>
                                <div className='flex w-full flex-col'>
                                <label  className='border border-black'><p className='text-lg bg-black text-white'>Valor das parcelas do Lote</p></label>
                                <input value={parce48} type="text"className='font-medium outline-none w-full text-sm border border-black uppercase p-1 text-center' />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className= 'flex flex-col  mx-auto text-center w-full'>
                        <div className=' flex flex-col'>
                        <label  className='border  p-1 text-center w-full border-black'><p className='text-lg'>60 parcelas</p></label>
                            <div className='flex w-auto'>
                                <div className='flex w-full flex-col'>
                                <label  className='border border-black'><p className='text-lg bg-black  text-white'>Lote a vista com juros</p></label>
                                <input value={vistaJ60} type="text"className='font-medium outline-none w-full text-sm border border-black uppercase p-1 text-center' />
                                </div>
                                <div className='flex w-full flex-col'>
                                <label  className='border border-black'><p className='text-lg bg-black text-white'>Valor das parcelas do Lote</p></label>
                                <input value={parce60} type="text"className='font-medium outline-none w-full text-sm border border-black uppercase p-1 text-center' />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className= 'flex flex-col  mx-auto text-center w-full'>
                        <div className=' flex flex-col'>
                        <label  className='border  p-1 text-center w-full border-black'><p className='text-lg'>80 parcelas</p></label>
                            <div className='flex w-auto'>
                                <div className='flex w-full flex-col'>
                                <label  className='border border-black'><p className='text-lg bg-black  text-white'>Lote a vista com juros</p></label>
                                <input value={vistaJ80} type="text"className='font-medium outline-none w-full text-sm border border-black uppercase p-1 text-center' />
                                </div>
                                <div className='flex w-full flex-col'>
                                <label  className='border border-black'><p className='text-lg bg-black text-white'>Valor das parcelas do Lote</p></label>
                                <input value={parce80} type="text"className='font-medium outline-none w-full text-sm border border-black uppercase p-1 text-center' />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className= 'flex flex-col  mx-auto text-center w-full'>
                        <div className=' flex flex-col'>
                        <label  className='border  p-1 text-center w-full border-black'><p className='text-lg'>100 parcelas</p></label>
                            <div className='flex w-auto'>
                                <div className='flex w-full flex-col'>
                                <label  className='border border-black'><p className='text-lg bg-black  text-white'>Lote a vista com juros</p></label>
                                <input value={vistaJ100} type="text"className='font-medium outline-none w-full text-sm border border-black uppercase p-1 text-center' />
                                </div>
                                <div className='flex w-full flex-col'>
                                <label  className='border border-black'><p className='text-lg bg-black text-white'>Valor das parcelas do Lote</p></label>
                                <input value={parce100} type="text"className='font-medium outline-none w-full text-sm border border-black uppercase p-1 text-center' />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className= 'flex flex-col  mx-auto text-center w-full'>
                        <div className=' flex flex-col'>
                        <label  className='border  p-1 text-center w-full border-black'><p className='text-lg'>120 parcelas</p></label>
                            <div className='flex w-auto'>
                                <div className='flex w-full flex-col'>
                                <label  className='border border-black'><p className='text-lg bg-black  text-white'>Lote a vista com juros</p></label>
                                <input value={vistaJ120} type="text"className='font-medium outline-none w-full text-sm border border-black uppercase p-1 text-center' />
                                </div>
                                <div className='flex w-full flex-col'>
                                <label  className='border border-black'><p className='text-lg bg-black text-white'>Valor das parcelas do Lote</p></label>
                                <input value={parce120} type="text"className='font-medium outline-none w-full text-sm border border-black uppercase p-1 text-center' />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className= 'flex flex-col  mx-auto text-center w-full'>
                        <div className=' flex flex-col'>
                        <label  className='border  p-1 text-center w-full border-black'><p className='text-lg'>140 parcelas</p></label>
                            <div className='flex w-auto'>
                                <div className='flex w-full flex-col'>
                                <label  className='border border-black'><p className='text-lg bg-black  text-white'>Lote a vista com juros</p></label>
                                <input value={vistaJ140} type="text"className='font-medium outline-none w-full text-sm border border-black uppercase p-1 text-center' />
                                </div>
                                <div className='flex w-full flex-col'>
                                <label  className='border border-black'><p className='text-lg bg-black text-white'>Valor das parcelas do Lote</p></label>
                                <input value={parce140} type="text"className='font-medium outline-none w-full text-sm border border-black uppercase p-1 text-center' />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className= 'flex flex-col  mx-auto text-center w-full'>
                        <div className=' flex flex-col'>
                        <label  className='border  p-1 text-center w-full border-black'><p className='text-lg'>200 parcelas</p></label>
                            <div className='flex w-auto'>
                                <div className='flex w-full flex-col'>
                                <label  className='border border-black'><p className='text-lg bg-black  text-white'>Lote a vista com juros</p></label>
                                <input value={vistaJ200} type="text"className='font-medium outline-none w-full text-sm border border-black uppercase p-1 text-center' />
                                </div>
                                <div className='flex w-full flex-col'>
                                <label  className='border border-black'><p className='text-lg bg-black text-white'>Valor das parcelas do Lote</p></label>
                                <input value={parce200} type="text"className='font-medium outline-none w-full text-sm border border-black uppercase p-1 text-center' />
                                </div>
                            </div>
                        </div>
                    </div>
         </div>
         <input className='p-2 bg-gray-700 mb-10  text-white' type="button" value="Enviar" onClick={calcular} />
        </form>
  )
}


export default Home