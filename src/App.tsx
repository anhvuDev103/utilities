import "./App.css";

import merge from "lodash/merge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useMemo, useState } from "react";

const data = [
  {
    id: "0x3f2f6045b0fb8d74e0c6458ae9407e1c2308339a",
    refer: "0x495808af09199d23fc899f8aabffd52cf09541aa",
    referCommission: "46600000000000000000",
    bigRefer: "0x0000000000000000000000000000000000000000",
    bigReferCommission: "0",
    totalAmountBet: "4660000000000000000000",
    totalCommission: "85500000000000000000",
    accessTime: "1732095436",
  },
  {
    id: "0xb5af92072cbe3e40c9835d0e3bf56f5e4a154434",
    refer: "0x495808af09199d23fc899f8aabffd52cf09541aa",
    referCommission: "187000000000000000000",
    bigRefer: "0x0000000000000000000000000000000000000000",
    bigReferCommission: "0",
    totalAmountBet: "18700000000000000000000",
    totalCommission: "0",
    accessTime: "1732097831",
  },
  {
    id: "0xcff72ba68d6fb0203b45d9b4c9d31272db4c80b4",
    refer: "0x495808af09199d23fc899f8aabffd52cf09541aa",
    referCommission: "20400000000000000000",
    bigRefer: "0x0000000000000000000000000000000000000000",
    bigReferCommission: "0",
    totalAmountBet: "3910000000000000000000",
    totalCommission: "0",
    accessTime: "1732099492",
  },
  {
    id: "0x10e072254e407d0da7776b9e0f61dd53d45e94d5",
    refer: "0x495808af09199d23fc899f8aabffd52cf09541aa",
    referCommission: "10400000000000000000",
    bigRefer: "0x0000000000000000000000000000000000000000",
    bigReferCommission: "0",
    totalAmountBet: "1040000000000000000000",
    totalCommission: "17860000000000000000",
    accessTime: "1732157074",
  },
  {
    id: "0xcfcc4c726cc51b2b8ab41fa52a16d2a04bd63126",
    refer: "0x10e072254e407d0da7776b9e0f61dd53d45e94d5",
    referCommission: "17860000000000000000",
    bigRefer: "0x495808af09199d23fc899f8aabffd52cf09541aa",
    bigReferCommission: "940000000000000000",
    totalAmountBet: "1880000000000000000000",
    totalCommission: "0",
    accessTime: "1732158408",
  },
  {
    id: "0x184628020ddd8b98a59fbace4dccf41d94a5b648",
    refer: "0x3f2f6045b0fb8d74e0c6458ae9407e1c2308339a",
    referCommission: "85500000000000000000",
    bigRefer: "0x495808af09199d23fc899f8aabffd52cf09541aa",
    bigReferCommission: "4500000000000000000",
    totalAmountBet: "9000000000000000000000",
    totalCommission: "0",
    accessTime: "1732163241",
  },
  {
    id: "0xe53228e5e7086934fae00d9d09c5069a20c07232",
    refer: "0x495808af09199d23fc899f8aabffd52cf09541aa",
    referCommission: "20000000000000000000",
    bigRefer: "0x0000000000000000000000000000000000000000",
    bigReferCommission: "0",
    totalAmountBet: "2000000000000000000000",
    totalCommission: "0",
    accessTime: "1732173155",
  },
];

function App() {
  const keys = Object.keys(merge({}, ...data));
  const [search, setSearch] = useState("");
  const [searchField, setSearchField] = useState("");

  const handleChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const computed = useMemo(() => {
    if (searchField && search) {
      return data.filter((d) => d[searchField].includes(search.trim()));
    }

    return data;
  }, [search, searchField]);

  return (
    <>
      <div className="flex items-stretch gap-1">
        <Select value={searchField} onValueChange={setSearchField}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select field" />
          </SelectTrigger>
          <SelectContent>
            {keys.map((key) => (
              <SelectItem key={key} value={key}>
                {key}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Input
          placeholder="Value"
          className="max-w-[400px]"
          value={search}
          onChange={handleChangeSearch}
        />
      </div>
      <Table className="border-collapse border mt-10">
        <TableHeader>
          <TableRow>
            {keys.map((key) => (
              <TableHead className="border max-w-[200px] truncate" key={key}>
                {key}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {computed.map((d, i) => (
            <TableRow key={i}>
              {Object.values(d).map((_d, _i) => (
                <TableCell className="border max-w-[200px] truncate" key={_i}>
                  {_d}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
}

export default App;
