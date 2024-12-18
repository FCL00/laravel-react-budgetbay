import { food } from "@/assets";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";


export default function CartTable(){
    return (
        <Table className="border-black">
          <TableHeader className="border-black">
            <TableRow className="border-black">
              <TableHead>Items</TableHead>
              <TableHead>Food Name</TableHead>
              <TableHead>Price</TableHead>
              <TableHead>Quantity</TableHead>
              <TableHead>Total</TableHead>
              <TableHead>Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
                <TableCell>
                    <img className="w-10 h-10 rounded-md" src={food} alt="product food" />
                </TableCell>
                <TableCell className="flex items-center line-clamp-1">Adobo Name</TableCell>
                <TableCell>$12.00</TableCell>
                <TableCell>1</TableCell>
                <TableCell>$12.00</TableCell>
                <TableCell>
                    <button className="p-2 bg-red-600 rounded-md text-white">Remove</button>
                </TableCell>
            </TableRow>
          </TableBody>
        </Table>
    );
}