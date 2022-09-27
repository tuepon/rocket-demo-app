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

#[get("/<file..>")]
fn files(file: PathBuf) -> Option<NamedFile> {
    NamedFile::open(Path::new("static/").join(file)).ok()
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
    rocket::ignite().mount("/", routes![index, files]).launch();
}
