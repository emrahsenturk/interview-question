import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export type Difficulty = 'Kolay' | 'Orta' | 'Zor';

export interface Question {
  id: number;
  title: string;
  description: string;
  codeExample?: string;
  language: string;
  difficulty: Difficulty;
}

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  private questions: Question[] = [
    // Mevcut sorular...
    // ... existing code ...

    // JavaScript Ek Kolay Sorular
    {
      id: 81,
      title: 'JavaScript Veri Tipleri',
      description: 'JavaScript\'teki temel veri tiplerini ve aralarındaki farkları açıklayın.',
      language: 'JavaScript',
      difficulty: 'Kolay'
    },
    {
      id: 82,
      title: 'Array Metodları',
      description: 'JavaScript\'te yaygın kullanılan array metodlarını örneklerle açıklayın.',
      language: 'JavaScript',
      difficulty: 'Kolay'
    },
    {
      id: 83,
      title: 'DOM Manipülasyonu',
      description: 'DOM elementlerine erişim ve manipülasyon yöntemlerini açıklayın.',
      language: 'JavaScript',
      difficulty: 'Kolay'
    },

    // Java Ek Kolay Sorular
    {
      id: 84,
      title: 'Java OOP Temelleri',
      description: 'Java\'da nesne yönelimli programlamanın temel prensiplerini açıklayın.',
      language: 'Java',
      difficulty: 'Kolay'
    },
    {
      id: 85,
      title: 'Java Veri Tipleri',
      description: 'Java\'daki primitive ve referans veri tiplerini açıklayın.',
      language: 'Java',
      difficulty: 'Kolay'
    },
    {
      id: 86,
      title: 'Java String İşlemleri',
      description: 'Java\'da string işleme metodlarını ve performans etkilerini açıklayın.',
      language: 'Java',
      difficulty: 'Kolay'
    },
    {
      id: 87,
      title: 'Java Arrays',
      description: 'Java\'da dizilerin kullanımını ve çok boyutlu dizileri açıklayın.',
      language: 'Java',
      difficulty: 'Kolay'
    },
    {
      id: 88,
      title: 'Java Loops',
      description: 'Java\'daki döngü yapılarını ve kullanım senaryolarını açıklayın.',
      language: 'Java',
      difficulty: 'Kolay'
    },
    {
      id: 89,
      title: 'Java Modifiers',
      description: 'Java\'daki erişim belirleyicileri ve kullanım amaçlarını açıklayın.',
      language: 'Java',
      difficulty: 'Kolay'
    },
    {
      id: 90,
      title: 'Java Methods',
      description: 'Java\'da metod tanımlama ve overloading kavramlarını açıklayın.',
      language: 'Java',
      difficulty: 'Kolay'
    },

    // Java Ek Orta Seviye Sorular
    {
      id: 91,
      title: 'Java Interface vs Abstract Class',
      description: 'Interface ve abstract class arasındaki farkları ve kullanım senaryolarını açıklayın.',
      language: 'Java',
      difficulty: 'Orta'
    },
    {
      id: 92,
      title: 'Java Collections',
      description: 'ArrayList, LinkedList, HashSet ve HashMap yapılarını karşılaştırın.',
      language: 'Java',
      difficulty: 'Orta'
    },
    {
      id: 93,
      title: 'Java File I/O',
      description: 'Java\'da dosya okuma ve yazma işlemlerini açıklayın.',
      language: 'Java',
      difficulty: 'Orta'
    },
    {
      id: 94,
      title: 'Java Regular Expressions',
      description: 'Java\'da regex kullanımını ve pattern matching örneklerini açıklayın.',
      language: 'Java',
      difficulty: 'Orta'
    },
    {
      id: 95,
      title: 'Java Date and Time API',
      description: 'Java 8 ile gelen yeni tarih ve zaman API\'sini açıklayın.',
      language: 'Java',
      difficulty: 'Orta'
    },

    // JavaScript Ek Kolay Sorular
    {
      id: 96,
      title: 'JavaScript Events',
      description: 'Event bubbling ve capturing kavramlarını açıklayın.',
      language: 'JavaScript',
      difficulty: 'Kolay'
    },
    {
      id: 97,
      title: 'JavaScript Functions',
      description: 'Function declaration ve expression arasındaki farkları açıklayın.',
      language: 'JavaScript',
      difficulty: 'Kolay'
    },
    {
      id: 98,
      title: 'JavaScript Objects',
      description: 'Object creation patterns ve property descriptors konularını açıklayın.',
      language: 'JavaScript',
      difficulty: 'Kolay'
    },
    {
      id: 99,
      title: 'JavaScript Scope',
      description: 'Global scope, function scope ve block scope kavramlarını açıklayın.',
      language: 'JavaScript',
      difficulty: 'Kolay'
    },
    {
      id: 100,
      title: 'JavaScript Operators',
      description: 'Yaygın kullanılan operatörleri ve type coercion konusunu açıklayın.',
      language: 'JavaScript',
      difficulty: 'Kolay'
    },

    // Python Ek Kolay Sorular
    {
      id: 101,
      title: 'Python Temel Veri Yapıları',
      description: 'List, tuple, set ve dictionary veri yapılarını karşılaştırın.',
      language: 'Python',
      difficulty: 'Kolay'
    },
    {
      id: 102,
      title: 'Python String Metodları',
      description: 'Python\'da string manipülasyonu için kullanılan metodları açıklayın.',
      language: 'Python',
      difficulty: 'Kolay'
    },
    {
      id: 103,
      title: 'Python File Operations',
      description: 'Python\'da dosya okuma ve yazma işlemlerini açıklayın.',
      language: 'Python',
      difficulty: 'Kolay'
    },
    {
      id: 104,
      title: 'Python Functions',
      description: 'Python\'da fonksiyon tanımlama ve parametre türlerini açıklayın.',
      language: 'Python',
      difficulty: 'Kolay'
    },
    {
      id: 105,
      title: 'Python Modules',
      description: 'Python modül sistemi ve import mekanizmasını açıklayın.',
      language: 'Python',
      difficulty: 'Kolay'
    },
    {
      id: 106,
      title: 'Python Exception Handling',
      description: 'Try-except bloklarının kullanımını ve hata türlerini açıklayın.',
      language: 'Python',
      difficulty: 'Kolay'
    },
    {
      id: 107,
      title: 'Python OOP',
      description: 'Python\'da nesne yönelimli programlama prensiplerini açıklayın.',
      language: 'Python',
      difficulty: 'Kolay'
    },

    // Python Ek Orta Sorular
    {
      id: 108,
      title: 'Python Decorators Advanced',
      description: 'Decorator factory ve parametreli decorator kullanımını açıklayın.',
      language: 'Python',
      difficulty: 'Orta'
    },
    {
      id: 109,
      title: 'Python Context Managers',
      description: 'Context manager protokolünü ve with statement kullanımını açıklayın.',
      language: 'Python',
      difficulty: 'Orta'
    },
    {
      id: 110,
      title: 'Python Async IO',
      description: 'Asenkron programlama ve async/await kullanımını açıklayın.',
      language: 'Python',
      difficulty: 'Orta'
    },
    {
      id: 111,
      title: 'Python Type Hints',
      description: 'Type annotation ve type hinting kullanımını açıklayın.',
      language: 'Python',
      difficulty: 'Orta'
    },

    // TypeScript Ek Kolay Sorular
    {
      id: 112,
      title: 'TypeScript Basic Types',
      description: 'TypeScript\'teki temel veri tiplerini ve type annotations kullanımını açıklayın.',
      language: 'TypeScript',
      difficulty: 'Kolay'
    },
    {
      id: 113,
      title: 'TypeScript Interfaces',
      description: 'Interface tanımlama ve kullanım senaryolarını açıklayın.',
      language: 'TypeScript',
      difficulty: 'Kolay'
    },
    {
      id: 114,
      title: 'TypeScript Classes',
      description: 'Class tanımlama ve inheritance kullanımını açıklayın.',
      language: 'TypeScript',
      difficulty: 'Kolay'
    },
    {
      id: 115,
      title: 'TypeScript Functions',
      description: 'Function types ve overloading kavramlarını açıklayın.',
      language: 'TypeScript',
      difficulty: 'Kolay'
    },
    {
      id: 116,
      title: 'TypeScript Generics Basic',
      description: 'Generic types ve generic constraints temellerini açıklayın.',
      language: 'TypeScript',
      difficulty: 'Kolay'
    },
    {
      id: 117,
      title: 'TypeScript Modules',
      description: 'Module sistemi ve import/export syntax\'ını açıklayın.',
      language: 'TypeScript',
      difficulty: 'Kolay'
    },
    {
      id: 118,
      title: 'TypeScript Type Assertions',
      description: 'Type assertion ve type casting kullanımını açıklayın.',
      language: 'TypeScript',
      difficulty: 'Kolay'
    },

    // TypeScript Ek Zor Sorular
    {
      id: 119,
      title: 'TypeScript Advanced Types',
      description: 'Mapped types ve conditional types kullanımını açıklayın.',
      language: 'TypeScript',
      difficulty: 'Zor'
    },
    {
      id: 120,
      title: 'TypeScript Decorators Advanced',
      description: 'Custom decorator oluşturma ve kullanım senaryolarını açıklayın.',
      language: 'TypeScript',
      difficulty: 'Zor'
    },
    {
      id: 121,
      title: 'TypeScript Project Configuration',
      description: 'tsconfig.json ayarlarını ve compiler options\'ları detaylı açıklayın.',
      language: 'TypeScript',
      difficulty: 'Zor'
    },
    {
      id: 122,
      title: 'TypeScript Design Patterns',
      description: 'TypeScript ile tasarım desenlerinin uygulanmasını açıklayın.',
      language: 'TypeScript',
      difficulty: 'Zor'
    },
    {
      id: 123,
      title: 'TypeScript Performance',
      description: 'TypeScript projelerinde performans optimizasyonu tekniklerini açıklayın.',
      language: 'TypeScript',
      difficulty: 'Zor'
    },

    // C# Ek Kolay Sorular
    {
      id: 124,
      title: 'C# Basic Syntax',
      description: 'C#\'ın temel sözdizimi ve veri tiplerini açıklayın.',
      language: 'C#',
      difficulty: 'Kolay'
    },
    {
      id: 125,
      title: 'C# Arrays and Collections',
      description: 'Array ve Collection türlerini ve kullanımlarını açıklayın.',
      language: 'C#',
      difficulty: 'Kolay'
    },
    {
      id: 126,
      title: 'C# Properties',
      description: 'Property syntax ve auto-implemented properties kullanımını açıklayın.',
      language: 'C#',
      difficulty: 'Kolay'
    },
    {
      id: 127,
      title: 'C# Methods',
      description: 'Method overloading ve optional parameters konularını açıklayın.',
      language: 'C#',
      difficulty: 'Kolay'
    },
    {
      id: 128,
      title: 'C# Exception Handling',
      description: 'Try-catch blokları ve exception türlerini açıklayın.',
      language: 'C#',
      difficulty: 'Kolay'
    },
    {
      id: 129,
      title: 'C# Strings',
      description: 'String işleme ve StringBuilder kullanımını açıklayın.',
      language: 'C#',
      difficulty: 'Kolay'
    },
    {
      id: 130,
      title: 'C# OOP Basics',
      description: 'Nesne yönelimli programlamanın temel prensiplerini açıklayın.',
      language: 'C#',
      difficulty: 'Kolay'
    },

    // C# Ek Orta Sorular
    {
      id: 131,
      title: 'C# Delegates and Events',
      description: 'Delegate ve event mekanizmalarını detaylı açıklayın.',
      language: 'C#',
      difficulty: 'Orta'
    },
    {
      id: 132,
      title: 'C# Generics',
      description: 'Generic types ve generic constraints kullanımını açıklayın.',
      language: 'C#',
      difficulty: 'Orta'
    },
    {
      id: 133,
      title: 'C# LINQ Advanced',
      description: 'LINQ query syntax ve method syntax kullanımını karşılaştırın.',
      language: 'C#',
      difficulty: 'Orta'
    },
    {
      id: 134,
      title: 'C# Async Programming',
      description: 'Task Parallel Library ve async/await pattern kullanımını açıklayın.',
      language: 'C#',
      difficulty: 'Orta'
    },

    // JavaScript Ek Kolay Sorular
    {
      id: 135,
      title: 'JavaScript Promise Handling',
      description: 'Promise yapısını ve async/await kullanımını örneklerle açıklayın.',
      language: 'JavaScript',
      difficulty: 'Kolay'
    },
    {
      id: 136,
      title: 'JavaScript ES6+ Features',
      description: 'ES6 ve sonrasında gelen önemli özellikleri örneklerle açıklayın.',
      language: 'JavaScript',
      difficulty: 'Kolay'
    },

    // JavaScript Orta Seviye Sorular
    {
      id: 137,
      title: 'JavaScript Closure',
      description: 'Closure kavramını ve kullanım senaryolarını detaylı açıklayın.',
      language: 'JavaScript',
      difficulty: 'Orta'
    },
    {
      id: 138,
      title: 'JavaScript Prototypes',
      description: 'Prototype inheritance ve prototype chain kavramlarını açıklayın.',
      language: 'JavaScript',
      difficulty: 'Orta'
    },
    {
      id: 139,
      title: 'JavaScript Event Loop',
      description: 'Event loop mekanizmasını ve call stack ilişkisini açıklayın.',
      language: 'JavaScript',
      difficulty: 'Orta'
    },
    {
      id: 140,
      title: 'JavaScript Memory Management',
      description: 'Garbage collection ve memory leak konularını detaylı açıklayın.',
      language: 'JavaScript',
      difficulty: 'Orta'
    },
    {
      id: 141,
      title: 'JavaScript Design Patterns',
      description: 'Module, Singleton ve Observer pattern örneklerini açıklayın.',
      language: 'JavaScript',
      difficulty: 'Orta'
    },
    {
      id: 142,
      title: 'JavaScript Testing',
      description: 'Unit test yazımı ve test framework kullanımını açıklayın.',
      language: 'JavaScript',
      difficulty: 'Orta'
    },
    {
      id: 143,
      title: 'JavaScript Performance',
      description: 'Performans optimizasyonu ve best practice örneklerini açıklayın.',
      language: 'JavaScript',
      difficulty: 'Orta'
    },
    {
      id: 144,
      title: 'JavaScript Security',
      description: 'XSS, CSRF gibi güvenlik açıklarını ve önlemlerini açıklayın.',
      language: 'JavaScript',
      difficulty: 'Orta'
    },
    {
      id: 145,
      title: 'JavaScript Web APIs',
      description: 'Service Workers ve Web Workers kullanımını açıklayın.',
      language: 'JavaScript',
      difficulty: 'Orta'
    },
    {
      id: 146,
      title: 'JavaScript State Management',
      description: 'Complex state management patterns ve solutions açıklayın.',
      language: 'JavaScript',
      difficulty: 'Orta'
    },

    // JavaScript Zor Sorular
    {
      id: 147,
      title: 'JavaScript Engine Internals',
      description: 'V8 engine çalışma prensiplerini detaylı açıklayın.',
      language: 'JavaScript',
      difficulty: 'Zor'
    },
    {
      id: 148,
      title: 'JavaScript Memory Optimization',
      description: 'Memory heap ve stack optimizasyon tekniklerini açıklayın.',
      language: 'JavaScript',
      difficulty: 'Zor'
    },
    {
      id: 149,
      title: 'JavaScript Micro-Frontend',
      description: 'Micro-frontend mimarisi ve implementasyon detaylarını açıklayın.',
      language: 'JavaScript',
      difficulty: 'Zor'
    },
    {
      id: 150,
      title: 'JavaScript Build Tools',
      description: 'Webpack, Rollup gibi build tool internals açıklayın.',
      language: 'JavaScript',
      difficulty: 'Zor'
    },
    {
      id: 151,
      title: 'JavaScript Framework Implementation',
      description: 'Virtual DOM ve reactive framework yapısını açıklayın.',
      language: 'JavaScript',
      difficulty: 'Zor'
    },
    {
      id: 152,
      title: 'JavaScript Concurrency',
      description: 'Web Workers ve SharedArrayBuffer kullanımını detaylı açıklayın.',
      language: 'JavaScript',
      difficulty: 'Zor'
    },
    {
      id: 153,
      title: 'JavaScript WebAssembly',
      description: 'WebAssembly entegrasyonu ve performans optimizasyonunu açıklayın.',
      language: 'JavaScript',
      difficulty: 'Zor'
    },
    {
      id: 154,
      title: 'JavaScript Compiler Design',
      description: 'Babel plugin ve custom transform geliştirmeyi açıklayın.',
      language: 'JavaScript',
      difficulty: 'Zor'
    },
    {
      id: 155,
      title: 'JavaScript Network Optimization',
      description: 'HTTP/2, caching ve lazy loading stratejilerini açıklayın.',
      language: 'JavaScript',
      difficulty: 'Zor'
    },
    {
      id: 156,
      title: 'JavaScript Architecture Patterns',
      description: 'Large scale application architecture ve scaling stratejilerini açıklayın.',
      language: 'JavaScript',
      difficulty: 'Zor'
    },

    // Java Ek Kolay Sorular
    {
      id: 157,
      title: 'Java Generics Basic',
      description: 'Generic types ve wildcards kullanımını açıklayın.',
      language: 'Java',
      difficulty: 'Kolay'
    },
    {
      id: 158,
      title: 'Java Stream API Basic',
      description: 'Stream API temel kullanımını örneklerle açıklayın.',
      language: 'Java',
      difficulty: 'Kolay'
    },
    {
      id: 159,
      title: 'Java Lambda Expressions',
      description: 'Lambda expressions ve functional interface kullanımını açıklayın.',
      language: 'Java',
      difficulty: 'Kolay'
    },

    // Java Ek Orta Sorular
    {
      id: 160,
      title: 'Java Concurrency Basic',
      description: 'Thread ve ExecutorService kullanımını açıklayın.',
      language: 'Java',
      difficulty: 'Orta'
    },
    {
      id: 161,
      title: 'Java NIO',
      description: 'Non-blocking I/O ve Channel API kullanımını açıklayın.',
      language: 'Java',
      difficulty: 'Orta'
    },
    {
      id: 162,
      title: 'Java Reflection',
      description: 'Reflection API kullanımı ve use-case\'lerini açıklayın.',
      language: 'Java',
      difficulty: 'Orta'
    },
    {
      id: 163,
      title: 'Java Design Patterns',
      description: 'Creational, structural ve behavioral pattern örneklerini açıklayın.',
      language: 'Java',
      difficulty: 'Orta'
    },
    {
      id: 164,
      title: 'Java Testing',
      description: 'JUnit ve Mockito kullanarak test yazımını açıklayın.',
      language: 'Java',
      difficulty: 'Orta'
    },

    // Java Zor Sorular
    {
      id: 165,
      title: 'Java Memory Model',
      description: 'JVM memory model ve garbage collection mekanizmalarını açıklayın.',
      language: 'Java',
      difficulty: 'Zor'
    },
    {
      id: 166,
      title: 'Java Concurrency Advanced',
      description: 'Lock mechanisms ve thread synchronization pattern\'lerini açıklayın.',
      language: 'Java',
      difficulty: 'Zor'
    },
    {
      id: 167,
      title: 'Java Performance Tuning',
      description: 'JVM tuning ve performance optimization tekniklerini açıklayın.',
      language: 'Java',
      difficulty: 'Zor'
    },
    {
      id: 168,
      title: 'Java Security',
      description: 'Security Manager ve permission based security modelini açıklayın.',
      language: 'Java',
      difficulty: 'Zor'
    },
    {
      id: 169,
      title: 'Java Class Loading',
      description: 'Class loader hierarchy ve custom class loader implementasyonunu açıklayın.',
      language: 'Java',
      difficulty: 'Zor'
    },
    {
      id: 170,
      title: 'Java Bytecode',
      description: 'Bytecode manipulation ve ASM library kullanımını açıklayın.',
      language: 'Java',
      difficulty: 'Zor'
    },
    {
      id: 171,
      title: 'Java Reactive Programming',
      description: 'Reactive streams ve Project Reactor kullanımını açıklayın.',
      language: 'Java',
      difficulty: 'Zor'
    },
    {
      id: 172,
      title: 'Java Microservices',
      description: 'Microservice architecture ve Spring Cloud kullanımını açıklayın.',
      language: 'Java',
      difficulty: 'Zor'
    },
    {
      id: 173,
      title: 'Java Native Interface',
      description: 'JNI kullanarak native kod entegrasyonunu açıklayın.',
      language: 'Java',
      difficulty: 'Zor'
    },
    {
      id: 174,
      title: 'Java Distributed Systems',
      description: 'Distributed caching ve transaction management konularını açıklayın.',
      language: 'Java',
      difficulty: 'Zor'
    },

    // Python Ek Kolay Sorular
    {
      id: 175,
      title: 'Python List Comprehension',
      description: 'List comprehension ve generator expression kullanımını açıklayın.',
      language: 'Python',
      difficulty: 'Kolay'
    },
    {
      id: 176,
      title: 'Python Lambda Functions',
      description: 'Lambda functions ve built-in functions kullanımını açıklayın.',
      language: 'Python',
      difficulty: 'Kolay'
    },
    {
      id: 177,
      title: 'Python Package Management',
      description: 'pip ve virtual environment kullanımını açıklayın.',
      language: 'Python',
      difficulty: 'Kolay'
    },

    // Python Ek Orta Sorular
    {
      id: 178,
      title: 'Python Metaclasses',
      description: 'Metaclass kullanımı ve class customization açıklayın.',
      language: 'Python',
      difficulty: 'Orta'
    },
    {
      id: 179,
      title: 'Python Concurrency',
      description: 'Threading ve multiprocessing kullanımını açıklayın.',
      language: 'Python',
      difficulty: 'Orta'
    },
    {
      id: 180,
      title: 'Python Design Patterns',
      description: 'Python\'da yaygın design pattern implementasyonlarını açıklayın.',
      language: 'Python',
      difficulty: 'Orta'
    },
    {
      id: 181,
      title: 'Python Testing',
      description: 'pytest ve unittest framework kullanımını açıklayın.',
      language: 'Python',
      difficulty: 'Orta'
    },
    {
      id: 182,
      title: 'Python Web Frameworks',
      description: 'Django ve Flask framework\'lerinin temel yapısını açıklayın.',
      language: 'Python',
      difficulty: 'Orta'
    },
    {
      id: 183,
      title: 'Python Database',
      description: 'SQLAlchemy ORM ve database operations açıklayın.',
      language: 'Python',
      difficulty: 'Orta'
    },

    // Python Zor Sorular
    {
      id: 184,
      title: 'Python Memory Management',
      description: 'Memory management ve garbage collection mekanizmalarını açıklayın.',
      language: 'Python',
      difficulty: 'Zor'
    },
    {
      id: 185,
      title: 'Python C Extensions',
      description: 'C/C++ extension modülleri geliştirmeyi açıklayın.',
      language: 'Python',
      difficulty: 'Zor'
    },
    {
      id: 186,
      title: 'Python Internals',
      description: 'CPython interpreter çalışma prensiplerini açıklayın.',
      language: 'Python',
      difficulty: 'Zor'
    },
    {
      id: 187,
      title: 'Python Performance',
      description: 'Performance optimization ve profiling tekniklerini açıklayın.',
      language: 'Python',
      difficulty: 'Zor'
    },
    {
      id: 188,
      title: 'Python Distributed Systems',
      description: 'Distributed computing ve message queuing sistemlerini açıklayın.',
      language: 'Python',
      difficulty: 'Zor'
    },
    {
      id: 189,
      title: 'Python Security',
      description: 'Security vulnerabilities ve prevention techniques açıklayın.',
      language: 'Python',
      difficulty: 'Zor'
    },
    {
      id: 190,
      title: 'Python Machine Learning',
      description: 'ML algorithms ve framework implementasyonlarını açıklayın.',
      language: 'Python',
      difficulty: 'Zor'
    },
    {
      id: 191,
      title: 'Python Data Processing',
      description: 'Big data processing ve pandas internals açıklayın.',
      language: 'Python',
      difficulty: 'Zor'
    },
    {
      id: 192,
      title: 'Python Network Programming',
      description: 'Socket programming ve network protocols implementasyonunu açıklayın.',
      language: 'Python',
      difficulty: 'Zor'
    },
    {
      id: 193,
      title: 'Python Compiler Design',
      description: 'AST manipulation ve custom compiler development açıklayın.',
      language: 'Python',
      difficulty: 'Zor'
    },

    // TypeScript Ek Kolay Sorular
    {
      id: 194,
      title: 'TypeScript Type Inference',
      description: 'Type inference mekanizmasını ve best practices açıklayın.',
      language: 'TypeScript',
      difficulty: 'Kolay'
    },
    {
      id: 195,
      title: 'TypeScript Enums',
      description: 'Enum types ve const enums kullanımını açıklayın.',
      language: 'TypeScript',
      difficulty: 'Kolay'
    },
    {
      id: 196,
      title: 'TypeScript Modules',
      description: 'Module system ve namespace kullanımını açıklayın.',
      language: 'TypeScript',
      difficulty: 'Kolay'
    },

    // TypeScript Orta Sorular
    {
      id: 197,
      title: 'TypeScript Generics Advanced',
      description: 'Generic constraints ve conditional types kullanımını açıklayın.',
      language: 'TypeScript',
      difficulty: 'Orta'
    },
    {
      id: 198,
      title: 'TypeScript Decorators',
      description: 'Class ve method decorator implementasyonunu açıklayın.',
      language: 'TypeScript',
      difficulty: 'Orta'
    },
    {
      id: 199,
      title: 'TypeScript Utility Types',
      description: 'Built-in utility types ve custom utility types oluşturmayı açıklayın.',
      language: 'TypeScript',
      difficulty: 'Orta'
    },
    {
      id: 200,
      title: 'TypeScript Type Guards',
      description: 'User-defined type guards ve type narrowing tekniklerini açıklayın.',
      language: 'TypeScript',
      difficulty: 'Orta'
    },
    {
      id: 201,
      title: 'TypeScript Mapped Types',
      description: 'Mapped types ve template literal types kullanımını açıklayın.',
      language: 'TypeScript',
      difficulty: 'Orta'
    },
    {
      id: 202,
      title: 'TypeScript Module Resolution',
      description: 'Module resolution strategies ve path mapping açıklayın.',
      language: 'TypeScript',
      difficulty: 'Orta'
    },
    {
      id: 203,
      title: 'TypeScript Declaration Files',
      description: '.d.ts files ve ambient declarations kullanımını açıklayın.',
      language: 'TypeScript',
      difficulty: 'Orta'
    },
    {
      id: 204,
      title: 'TypeScript Project References',
      description: 'Project references ve composite projects yapısını açıklayın.',
      language: 'TypeScript',
      difficulty: 'Orta'
    },
    {
      id: 205,
      title: 'TypeScript Compiler API',
      description: 'Compiler API kullanarak custom transformations açıklayın.',
      language: 'TypeScript',
      difficulty: 'Orta'
    },
    {
      id: 206,
      title: 'TypeScript Testing',
      description: 'Type testing ve test utilities kullanımını açıklayın.',
      language: 'TypeScript',
      difficulty: 'Orta'
    },

    // TypeScript Ek Zor Sorular
    {
      id: 207,
      title: 'TypeScript Type System Internals',
      description: 'Type system implementation details ve type checking açıklayın.',
      language: 'TypeScript',
      difficulty: 'Zor'
    },
    {
      id: 208,
      title: 'TypeScript Compiler Plugins',
      description: 'Custom compiler plugins ve transformers geliştirmeyi açıklayın.',
      language: 'TypeScript',
      difficulty: 'Zor'
    },
    {
      id: 209,
      title: 'TypeScript Performance',
      description: 'Type checking performance ve optimization tekniklerini açıklayın.',
      language: 'TypeScript',
      difficulty: 'Zor'
    },
    {
      id: 210,
      title: 'TypeScript Build Tools',
      description: 'Build tool integration ve configuration management açıklayın.',
      language: 'TypeScript',
      difficulty: 'Zor'
    },
    {
      id: 211,
      title: 'TypeScript Language Service',
      description: 'Language service API ve custom language service pluginleri açıklayın.',
      language: 'TypeScript',
      difficulty: 'Zor'
    },

    // C# Ek Kolay Sorular
    {
      id: 212,
      title: 'C# LINQ Basic',
      description: 'LINQ query syntax ve method syntax kullanımını açıklayın.',
      language: 'C#',
      difficulty: 'Kolay'
    },
    {
      id: 213,
      title: 'C# Extension Methods',
      description: 'Extension methods ve utility extensions yazımını açıklayın.',
      language: 'C#',
      difficulty: 'Kolay'
    },
    {
      id: 214,
      title: 'C# Attributes',
      description: 'Built-in attributes ve custom attributes kullanımını açıklayın.',
      language: 'C#',
      difficulty: 'Kolay'
    },

    // C# Ek Orta Sorular
    {
      id: 215,
      title: 'C# Reflection Advanced',
      description: 'Dynamic type creation ve method invocation açıklayın.',
      language: 'C#',
      difficulty: 'Orta'
    },
    {
      id: 216,
      title: 'C# Expression Trees',
      description: 'Expression trees ve dynamic query building açıklayın.',
      language: 'C#',
      difficulty: 'Orta'
    },
    {
      id: 217,
      title: 'C# Memory Management',
      description: 'Garbage collection ve memory optimization tekniklerini açıklayın.',
      language: 'C#',
      difficulty: 'Orta'
    },
    {
      id: 218,
      title: 'C# Threading Patterns',
      description: 'Common threading patterns ve synchronization primitives açıklayın.',
      language: 'C#',
      difficulty: 'Orta'
    },
    {
      id: 219,
      title: 'C# Design Patterns',
      description: 'Enterprise design patterns ve implementation details açıklayın.',
      language: 'C#',
      difficulty: 'Orta'
    },
    {
      id: 220,
      title: 'C# Security',
      description: 'Code access security ve cryptography kullanımını açıklayın.',
      language: 'C#',
      difficulty: 'Orta'
    },

    // C# Zor Sorular
    {
      id: 221,
      title: 'C# CLR Internals',
      description: 'CLR architecture ve execution pipeline açıklayın.',
      language: 'C#',
      difficulty: 'Zor'
    },
    {
      id: 222,
      title: 'C# Compiler Design',
      description: 'Roslyn compiler API ve custom analyzers geliştirmeyi açıklayın.',
      language: 'C#',
      difficulty: 'Zor'
    },
    {
      id: 223,
      title: 'C# Performance',
      description: 'Performance optimization ve profiling techniques açıklayın.',
      language: 'C#',
      difficulty: 'Zor'
    },
    {
      id: 224,
      title: 'C# Distributed Systems',
      description: 'Distributed computing ve microservices architecture açıklayın.',
      language: 'C#',
      difficulty: 'Zor'
    },
    {
      id: 225,
      title: 'C# Native Interop',
      description: 'P/Invoke ve COM interop detaylarını açıklayın.',
      language: 'C#',
      difficulty: 'Zor'
    },
    {
      id: 226,
      title: 'C# Advanced Threading',
      description: 'TPL internals ve custom task schedulers açıklayın.',
      language: 'C#',
      difficulty: 'Zor'
    },
    {
      id: 227,
      title: 'C# Memory Model',
      description: '.NET memory model ve low-level optimizations açıklayın.',
      language: 'C#',
      difficulty: 'Zor'
    },
    {
      id: 228,
      title: 'C# Code Generation',
      description: 'IL emission ve dynamic assembly generation açıklayın.',
      language: 'C#',
      difficulty: 'Zor'
    },
    {
      id: 229,
      title: 'C# Framework Design',
      description: 'Framework design guidelines ve API design principles açıklayın.',
      language: 'C#',
      difficulty: 'Zor'
    },
    {
      id: 230,
      title: 'C# Security Advanced',
      description: 'Security architecture ve threat mitigation strategies açıklayın.',
      language: 'C#',
      difficulty: 'Zor'
    }
  ];

  private currentQuestionIndex = new BehaviorSubject<number>(0);
  private selectedLanguage = new BehaviorSubject<string>('');
  private selectedDifficulty = new BehaviorSubject<Difficulty>('Kolay');
  private selectedTime = new BehaviorSubject<number>(60); // Varsayılan 1 dakika
  private availableTimes: number[] = [60, 120, 180, 300]; // 1, 2, 3, 5 dakika

  readonly availableLanguages = ['JavaScript', 'Python', 'Java', 'C#', 'TypeScript'];
  readonly availableDifficulties: Difficulty[] = ['Kolay', 'Orta', 'Zor'];

  constructor() { }

  getAvailableLanguages(): string[] {
    return this.availableLanguages;
  }

  getAvailableDifficulties(): Difficulty[] {
    return this.availableDifficulties;
  }

  getSelectedLanguage(): string {
    return this.selectedLanguage.getValue();
  }

  getSelectedDifficulty(): Difficulty {
    return this.selectedDifficulty.getValue();
  }

  setLanguage(language: string) {
    this.selectedLanguage.next(language);
    this.currentQuestionIndex.next(0);
  }

  setDifficulty(difficulty: Difficulty) {
    this.selectedDifficulty.next(difficulty);
    this.currentQuestionIndex.next(0);
  }

  getCurrentQuestion(): Question | null {
    const questions = this.getFilteredQuestions();
    const currentIndex = this.currentQuestionIndex.getValue();
    return questions[currentIndex] || null;
  }

  nextQuestion(): boolean {
    const questions = this.getFilteredQuestions();
    const currentIndex = this.currentQuestionIndex.getValue();
    
    if (currentIndex < questions.length - 1) {
      this.currentQuestionIndex.next(currentIndex + 1);
      return true;
    }
    return false;
  }

  getFilteredQuestions(): Question[] {
    const selectedLang = this.selectedLanguage.getValue();
    const selectedDiff = this.selectedDifficulty.getValue();
    
    const filteredQuestions = this.questions.filter(q => 
      (!selectedLang || q.language === selectedLang) && 
      (!selectedDiff || q.difficulty === selectedDiff)
    );
    
    // Soruları karıştır
    const shuffled = [...filteredQuestions].sort(() => Math.random() - 0.5);
    
    // Rastgele 5 soru seç
    return shuffled.slice(0, 5);
  }

  getAvailableTimes(): number[] {
    return this.availableTimes;
  }

  setTime(time: number) {
    this.selectedTime.next(time);
  }

  getSelectedTime(): number {
    return this.selectedTime.getValue();
  }
} 