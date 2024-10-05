use actix_web::{get, web, HttpResponse, Responder}; // Add `web` module here
use rand::{distributions::Alphanumeric, Rng};
use serde_json::json;

// The homepage rendering function
#[get("/")]
pub async fn index() -> impl Responder {
    let html = include_str!("../templates/index.html");
    HttpResponse::Ok().content_type("text/html").body(html)
}

// The password generation endpoint
#[get("/generate-password/{length}")]
pub async fn generate_password(length: web::Path<usize>) -> impl Responder {
    let password: String = rand::thread_rng()
        .sample_iter(&Alphanumeric)
        .take(*length) // The password length from the path parameter
        .map(char::from)
        .collect();

    let response = json!({ "password": password });
    HttpResponse::Ok().json(response) // Return JSON response
}
