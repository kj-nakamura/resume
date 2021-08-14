<?php

namespace App\Http\Controllers\publicControllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use PDF;

class resumeController extends Controller
{
    public function index()
    {
        return Inertia::render('resume/Index', [
            'loggedin' => auth()->id(),
        ]);
    }

    public function webPreview(Request $request)
    {
        return view('resume.web_preview', ['data' => $request]);
    }

    public function pdfPreview(Request $request)
    {
        $pdf = PDF::loadView('resume/pdf_preview', ['data' => $request]);
        return $pdf->stream();

        // download PDF file with download method
        //   return $pdf->download('pdf_file.pdf');
    }

    public function pdfDownload(Request $request)
    {
        $pdf = PDF::loadView('resume/pdf_preview', ['data' => $request]);
        // download PDF file with download method
        return $pdf->download('pdf_file.pdf');
    }
}
