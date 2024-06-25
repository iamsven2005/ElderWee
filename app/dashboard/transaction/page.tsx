"use client"

import { useState } from "react"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table"

export default function Component() {
  const [searchTerm, setSearchTerm] = useState("")
  const [filterType, setFilterType] = useState("all")
  const [currentPage, setCurrentPage] = useState(1)
  const [transactionsPerPage] = useState(10)
  const transactions = [
    {
      id: 1,
      date: "2023-06-01",
      amount: 1000.0,
      type: "deposit",
      description: "Paycheck deposit",
    },
    {
      id: 2,
      date: "2023-05-15",
      amount: 500.0,
      type: "withdrawal",
      description: "Rent payment",
    },
    {
      id: 3,
      date: "2023-04-30",
      amount: 250.0,
      type: "transfer",
      description: "Transfer to savings",
    },
    {
      id: 4,
      date: "2023-04-20",
      amount: 75.0,
      type: "withdrawal",
      description: "Grocery purchase",
    },
    {
      id: 5,
      date: "2023-03-25",
      amount: 2000.0,
      type: "deposit",
      description: "Tax refund",
    },
    {
      id: 6,
      date: "2023-03-10",
      amount: 150.0,
      type: "withdrawal",
      description: "Utility bill payment",
    },
    {
      id: 7,
      date: "2023-02-28",
      amount: 1500.0,
      type: "transfer",
      description: "Transfer to investment account",
    },
    {
      id: 8,
      date: "2023-02-15",
      amount: 300.0,
      type: "withdrawal",
      description: "Car payment",
    },
    {
      id: 9,
      date: "2023-01-31",
      amount: 800.0,
      type: "deposit",
      description: "Freelance work payment",
    },
    {
      id: 10,
      date: "2023-01-20",
      amount: 50.0,
      type: "withdrawal",
      description: "Dining out",
    },
    {
      id: 11,
      date: "2023-01-05",
      amount: 1200.0,
      type: "deposit",
      description: "Bonus payment",
    },
    {
      id: 12,
      date: "2022-12-31",
      amount: 400.0,
      type: "withdrawal",
      description: "Holiday shopping",
    },
  ]
  const filteredTransactions = transactions.filter((transaction) => {
    if (filterType === "all") {
      return transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
    } else {
      return transaction.type === filterType && transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
    }
  })
  const indexOfLastTransaction = currentPage * transactionsPerPage
  const indexOfFirstTransaction = indexOfLastTransaction - transactionsPerPage
  const currentTransactions = filteredTransactions.slice(indexOfFirstTransaction, indexOfLastTransaction)
  const totalPages = Math.ceil(filteredTransactions.length / transactionsPerPage)
  const handlePageChange = (pageNumber: any) => {
    setCurrentPage(pageNumber)
  }
  return (
    <div className="bg-background text-foreground p-6 rounded-lg shadow-md">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-bold">Transaction History</h1>
        <div className="flex items-center gap-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="flex items-center gap-2">
                <FilterIcon className="w-4 h-4" />
                <span>{filterType === "all" ? "All" : filterType}</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem onSelect={() => setFilterType("all")}>All</DropdownMenuItem>
              <DropdownMenuItem onSelect={() => setFilterType("deposit")}>Deposit</DropdownMenuItem>
              <DropdownMenuItem onSelect={() => setFilterType("withdrawal")}>Withdrawal</DropdownMenuItem>
              <DropdownMenuItem onSelect={() => setFilterType("transfer")}>Transfer</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Input
            type="text"
            placeholder="Search transactions..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="bg-muted text-foreground px-3 py-2 rounded-md w-64"
          />
        </div>
      </div>
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Date</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Description</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {currentTransactions.map((transaction) => (
              <TableRow key={transaction.id}>
                <TableCell>{transaction.date}</TableCell>
                <TableCell className="text-right">
                  {transaction.type === "deposit" ? (
                    <span className="text-green-500">+${transaction.amount.toFixed(2)}</span>
                  ) : (
                    <span className="text-red-500">-${transaction.amount.toFixed(2)}</span>
                  )}
                </TableCell>
                <TableCell>{transaction.type}</TableCell>
                <TableCell>{transaction.description}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-between mt-4">
        <div className="text-sm text-muted-foreground">
          Showing {indexOfFirstTransaction + 1} to {indexOfLastTransaction} of {filteredTransactions.length}{" "}
          transactions
        </div>
        <div className="flex items-center gap-2">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <Button
              key={page}
              variant={currentPage === page ? "secondary" : "outline"}
              onClick={() => handlePageChange(page)}
              className="px-3 py-1 text-sm"
            >
              {page}
            </Button>
          ))}
        </div>
      </div>
    </div>
  )
}

function FilterIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
    </svg>
  )
}