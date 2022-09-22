#![feature(proc_macro_hygiene, decl_macro)]

#[macro_use] extern crate rocket;

#[get("/")]
fn index() -> &'static str {
    "This is my first Rocket Demo app"
}

#[get("/about")]
fn about() -> &'static str {
    "This is the about page of my Rocket Demo app"
}

fn main() {
    rocket::ignite().mount("/", routes![index, about]).launch();
}
