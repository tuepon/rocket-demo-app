#![feature(proc_macro_hygiene, decl_macro)]
#[macro_use] 
extern crate rocket;

use std::io;
use std::path::{Path, PathBuf};

use rocket::response::NamedFile;

#[get("/")]
fn index() -> io::Result<NamedFile> {
    NamedFile::open("src/index.jsx")
}

// #[get("/")]
// fn index() -> &'static str {
//     "This is my first Rocket Demo app"
// }

// #[get("/about")]
// fn about() -> &'static str {
//     "This is the about page of my Rocket Demo app"
// }

fn main() {
    rocket::ignite().mount("/", routes![index]).launch();
}
