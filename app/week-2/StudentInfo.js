import Link from "next/link";

export default function StudentInfo() {
  return (
    <div>
      <p>Name: Himanshi</p>
      <p>
        GitHub Repository:{" "}
        <Link href="https://github.com/himanshi-2005/cprg306-assignments">
          https://github.com/himanshi-2005/cprg306-assignments
        </Link>
      </p>
    </div>
  );
}
