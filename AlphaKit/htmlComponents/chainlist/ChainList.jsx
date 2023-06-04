import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'

const people = [
    {
        id: 1,
        name: "Etheruem",
        url: "https://mainnet.infura.io/v3/06f87a8dd9b54eb6b2b295d56b895a43",
        avatar: "/chains/ethereum.png",
    },
    {
        id: 2,
        name: "Polygon",
        url: "https://polygon-mainnet.infura.io/v3/06f87a8dd9b54eb6b2b295d56b895a43",
        avatar: "/chains/polygon.png",
    },
    {
        id: 3,
        name: "optimism-mainnet",
        url: "https://optimism-mainnet.infura.io/v3/06f87a8dd9b54eb6b2b295d56b895a43",
        avatar: "/chains/optimism.png",
    },
    {
        id: 4,
        name: "Arbitrum",
        url: "https://arbitrum-mainnet.infura.io/v3/06f87a8dd9b54eb6b2b295d56b895a43",
        avatar: "/chains/OIP.jpeg",
    },
    {
        id: 5,
        name: "Palm",
        url: "https://palm-mainnet.infura.io/v3/06f87a8dd9b54eb6b2b295d56b895a43",
        avatar: "/chains/palm.png",
    },
    {
        id: 6,
        name: "Avalanche",
        url: "https://avalanche-mainnet.infura.io/v3/06f87a8dd9b54eb6b2b295d56b895a43",
        avatar: "/chains/avalanche.png",
    },
{

        id: 7,
        name: "Near",
        url: "https://near-mainnet.infura.io/v3/06f87a8dd9b54eb6b2b295d56b895a43",
        avatar: "/chains/near.png",
    },
 {
        id: 8,
        name: "Aurora",
        url: "https://aurora-mainnet.infura.io/v3/06f87a8dd9b54eb6b2b295d56b895a43",
        avatar: "/chains/aurora.png",
    },
  {
        id: 9,
        name: "Starknet",
        url: "https://starknet-mainnet.infura.io/v3/06f87a8dd9b54eb6b2b295d56b895a43",
        avatar: "/chains/StarkNet.png",
    },
   {
        id: 10,
        name: "Celo",
        url: "https://celo-mainnet.infura.io/v3/06f87a8dd9b54eb6b2b295d56b895a43",
        avatar: "/jettspacheckout/jetsapp/src/assets/chains/celo.png",
    }
]

function classNames(...classes){

  return classes.filter(Boolean).join(' ')
}

export default function Chainlist() {
  const [selected, setSelected] = useState(people[3])

  return (
    <>

    <Listbox value={selected} onChange={setSelected}>
      {({ open }) => (
        <>
          <Listbox.Label className="block text-sm font-medium leading-6 text-gray-900">Assigned to</Listbox.Label>
          <div className="relative mt-2">
            <Listbox.Button className="relative h-14 w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6">
              <span className="flex items-center">
                <img src={selected.avatar} alt="" className="h-8 w-8 flex-shrink-0 rounded-full" />
                <span className="ml-3 block truncate">{selected.name}</span>
              </span>
              <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
              </span>
            </Listbox.Button>

            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                {people.map((person) => (
                  <Listbox.Option
                    key={person.id}
                    className={({ active }) =>
                      classNames(
                        active ? 'bg-indigo-600 text-white' : 'text-gray-900',
                        'relative cursor-default select-none py-2 pl-3 pr-9'
                      )
                    }
                    value={person}
                  >
                    {({ selected, active }) => (
                      <>
                        <div className="flex items-center">
                          <img src={person.avatar} alt="" className="h-8 w-8 flex-shrink-0 rounded-full" />
                          <span
                            className={classNames(selected ? 'font-semibold' : 'font-normal', 'ml-3 block truncate')}
                          >
                            {person.name}
                          </span>
                        </div>

                        {selected ? (
                          <span
                            className={classNames(
                              active ? 'text-white' : 'text-indigo-600',
                              'absolute inset-y-0 right-0 flex items-center pr-4'
                            )}
                          >
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </>
      )}
    </Listbox>
    </>
  )
}
